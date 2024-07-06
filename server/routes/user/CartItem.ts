import express, { Request, Response } from "express";
import Cart from "../../schemas/Cart";
import { authenticateUser } from "../../JWT/authentication";
const router = express.Router();

router.get("/cart", authenticateUser, async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    const cartItems = await Cart.find({ userId: req.userId });
    res.json(cartItems);
  } catch (err) {
    console.error("Error retrieving cart items:", err);
    res.status(500).json({ error: "Failed to retrieve cart items" });
  }
});

router.post("/cart", authenticateUser, async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;
    // @ts-ignore
    const userId = req.userId;

    let cart = await Cart.findOne({ userId });

    if (cart) {
      const itemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    } else {
      cart = new Cart({
        userId,
        items: [{ productId, quantity }],
      });
    }

    await cart.save();

    res.status(201).json(cart);
  } catch (err) {
    console.error("Error adding item to cart:", err);
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});

router.delete(
  "/cart/:id",
  authenticateUser,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await Cart.findByIdAndDelete(id);

      res.json({ message: "Cart item deleted successfully" });
    } catch (err) {
      console.error("Error deleting cart item:", err);
      res.status(500).json({ error: "Failed to delete cart item" });
    }
  }
);

export default router;
  