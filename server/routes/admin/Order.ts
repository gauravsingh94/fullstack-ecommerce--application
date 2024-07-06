import express, { Request, Response } from "express";
import { authenticateAdmin } from "../../JWT/authentication";
import Order from "../../schemas/Orders";

const router = express.Router();

router.get("/order", authenticateAdmin, async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({})
      .populate("userId")
      .populate("items.productId");
    if (!orders) return res.status(404).json({ error: "Orders not found." });
    return res.json(orders);
  } catch (err) {
    console.error("Error:", err);
  }
});

export default router;
