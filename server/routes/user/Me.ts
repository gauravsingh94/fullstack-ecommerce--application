import express, { Request, Response } from "express";
import { authenticateUser } from "../../JWT/authentication";
import User from "../../schemas/User";
const router = express.Router();

router.get("/me", authenticateUser, async (req: Request, res: Response) => {
  try {
    const user = await User.find({});
    if (!user) return res.json({ error: "User does not exist." });
    return res.json(user);
  } catch (error) {
    console.log("Error: ", error);
  }
});
