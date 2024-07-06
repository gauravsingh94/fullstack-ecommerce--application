import express, { Request, Response } from "express";
import Cart from "../../schemas/Cart";
import Order from "../../schemas/Orders";
import { authenticateUser } from "../../JWT/authentication";

const router = express.Router();

router.post("/order", authenticateUser, async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const userId = req.userId;

    const cart = await Cart.findOne({ userId }).populate("items.productId");

    // @ts-ignore

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    let totalAmount = 0;

    cart?.items.forEach((item) => {
      // @ts-ignore
      totalAmount = item.productId.price * item.quantity;
    });
    
    const newOrder = new Order({
      userId,
      items: cart.items,
      totalAmount,
      status: "Pending",
    });

    await newOrder.save();

    await Cart.updateOne({ userId }, { $set: { items: [] } });

    res.status(201).json(newOrder);
  } catch (err) {
    console.error("Error:", err);
  }
});

export default router;
