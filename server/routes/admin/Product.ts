import express, { Request, Response } from "express";
import { authenticateAdmin } from "../../JWT/authentication";
import Product, { IProduct } from "../../schemas/Product";
const router = express.Router();

router.post(
  "/products",
  authenticateAdmin,
  async (req: Request, res: Response) => {
    const { name, description, price, category, image } = req.body;

    try {
      const productData: any = {
        name,
        description,
        price,
        category,
      };

      if (image) {
        productData.image = image;
      }

      const newProduct: IProduct = new Product(productData);
      const savedProduct = await newProduct.save();
      res.json(savedProduct);
    } catch (error) {
      console.error("Error adding product:", error);
      if (!res.headersSent) {
        res.status(500).json({ message: "Failed to add product", error });
      }
    }
  }
);

router.put(
  "/products/:id",
  authenticateAdmin,
  async (req: Request, res: Response) => {
    const productId = req.params.id;
    const { name, description, price, category, image } = req.body;

    try {
      const productData: any = {
        name,
        description,
        price,
        category,
      };
      if (image) productData.image = image;

      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        productData,
        { new: true }
      );

      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: "Failed to update product", error });
    }
  }
);

router.delete(
  "/products/:id",
  authenticateAdmin,
  async (req: Request, res: Response) => {
    const productId = req.params.id;

    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);

      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete product", error });
    }
  }
);

router.get(
  "/products/:id",
  authenticateAdmin,
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
      console.error("Error fetching product:", error);
      return res
        .status(500)
        .json({ message: "Failed to fetch product", error });
    }
  }
);

router.get(
  "/products",
  authenticateAdmin,
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
