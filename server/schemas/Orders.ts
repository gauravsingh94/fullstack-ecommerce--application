import { Schema, model, Document } from 'mongoose';

interface IOrderItem {
  productId: Schema.Types.ObjectId;
  quantity: number;
}

interface IOrder extends Document {
  userId: Schema.Types.ObjectId;
  items: IOrderItem[];
  totalAmount: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const orderSchema = new Schema<IOrder>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User', 
  },
  items: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product', 
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
}, { timestamps: true });

const Order = model<IOrder>('Order', orderSchema);
export default Order;
