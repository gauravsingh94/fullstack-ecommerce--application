import { Schema, model, Document } from "mongoose";

interface ICartItem {
  productId: Schema.Types.ObjectId;
  quantity: number;
}

interface ICart extends Document {
  userId: Schema.Types.ObjectId;
  items: ICartItem[];
  createdAt?: Date;
  updatedAt?: Date;
}

const cartSchema = new Schema<ICart>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = model<ICart>("Cart", cartSchema);
export default Cart;
