import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
dotenv.config();

const userSecret = process.env.USER_SECRET;
const adminSecret = process.env.ADMIN_SECRET;

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Authorization token is required" });
  }

  try {
    const decoded = jwt.verify(token, userSecret!);
    // @ts-ignore
    req.userId = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const authenticateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Authorization token is required" });
  }

  try {
    const decoded = jwt.verify(token, adminSecret!);
    // @ts-ignore
    req.adminId = decoded;
    next();
  } catch (error) {}
  return res.status(401).json({ message: "Invalid token" });
};

// if user is logged in once we maintain the session of 1 month here
export const generateTokenUser = (userId: string) => {
  const expiresIn = 28 * 24 * 60 * 60;
  const token = jwt.sign(userId, userSecret!, { expiresIn });
  return token;
};

export const generateTokenAdmin = (AdminId: string) => {
  const expiresIn = 28 * 24 * 60 * 60;
  const token = jwt.sign(AdminId, userSecret!, { expiresIn });
  return token;
};
