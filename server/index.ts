import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json);

const connectDB = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log("Connected to the database.");
  } catch (err) {
    console.log(err);
  }
};
connectDB();

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
