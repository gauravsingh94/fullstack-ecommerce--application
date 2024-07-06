import express, { Request, Response } from "express";
import { authenticateAdmin } from "../../JWT/authentication";
import Admin from "../../schemas/Admin";
const router = express.Router();

router.get("/me", authenticateAdmin, async (req: Request, res: Response) => {
  try {
    const admin = await Admin.find({});
    if (!admin) return res.json({ error: "Admin does not exist." });
    return res.json(admin);
  } catch (error) {
    console.log("Error: ", error);
  }
});
