import express, { Request, Response } from "express";
import User, { IUser } from "../../schemas/User";
import { generateTokenUser } from "../../JWT/authentication";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
const router = express.Router();
dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS!);

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { name, email, password, image } = req.body;
    const newUserDetails: any = {
      name,
      email,
      password: await bcrypt.hash(password, saltRounds),
    };
    if (image) newUserDetails.image = image;
    const newUser: IUser = new User(newUserDetails);
    const savedUser = await newUser.save();
    const token = generateTokenUser(savedUser.id);
    res.status(201).json({ token: token, admin: savedUser });
  } catch (error) {
    console.log("Error while signup user: ", error);
    res.json({ "Error while signup user: ": error });
  }
});
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user: IUser | null = await User.findOne({ email });
    if (!user) return res.json({ error: "Email does not exist." });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ error: "Password is incorrect." });
    const token = generateTokenUser(user.id);
    res.json({ token, user });
  } catch (error) {
    console.log("Error while login user: ", error);
    res.json({ "Error while login user: ": error });
  }
});
export default router;
