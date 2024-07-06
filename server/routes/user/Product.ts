import express, { Request, Response } from "express";
import { authenticateUser } from "../../JWT/authentication";
import Product from "../../schemas/Product";
const router = express.Router();

router.get(
  "/products/:id",
  authenticateUser,
  async (req: Request, res: Response) => {
    const productId = req.params.id;
    try {
      const product = await Product.findById(productId);
      if (product) {
        return res.json(product);
      } else {
        return res.status(404).json({ error: "Product not found." });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product", error });
    }
  }
);

router.get(
  "/products",
  authenticateUser,
  async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    try {
      const count = await Product.countDocuments();
      const products = await Product.find()
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();

      const totalPages = Math.ceil(count / limit);

      res.json({
        products,
        totalPages,
        currentPage: page,
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products", error });
    }
  }
);

export default router;
