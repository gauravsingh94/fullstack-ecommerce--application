import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AdminProductRoutes from "./routes/admin/Product";
import UserProductRoutes from "./routes/admin/Product";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/admin", AdminProductRoutes);
app.use("/user", UserProductRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log("Connected to the database.");
  } catch (err) {
    console.log(err);
  }
};
connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
