import express, { Request, Response } from "express";
import Admin, { IAdmin } from "../../schemas/Admin";
import { generateTokenAdmin } from "../../JWT/authentication";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
const router = express.Router();
dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS!);

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { name, email, password, image } = req.body;
    const newAdminDetails: any = {
      name,
      email,
      password: await bcrypt.hash(password, saltRounds),
    };
    if (image) newAdminDetails.image = image;
    const newAdmin: IAdmin = new Admin(newAdminDetails);
    const savedAdmin = await newAdmin.save();
    const token = generateTokenAdmin(savedAdmin.id);
    res.status(201).json({ token: token, admin: savedAdmin });
  } catch (error) {
    console.log("Error while signup admin: ", error);
    res.json({ "Error while signup admin: ": error });
  }
});
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const admin: IAdmin | null = await Admin.findOne({ email });
    if (!admin) return res.json({ error: "Email does not exist." });
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.json({ error: "Password is incorrect." });
    const token = generateTokenAdmin(admin.id);
    res.json({ token, admin });
  } catch (error) {
    console.log("Error while login admin: ", error);
    res.json({ "Error while login admin: ": error });
  }
});

export default router;
