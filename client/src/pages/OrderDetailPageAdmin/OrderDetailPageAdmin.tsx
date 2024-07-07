import React from "react";

interface IOrderItem {
  productId: string;
  quantity: number;
}

interface IOrder {
  _id: string;
  userId: string;
  totalAmount: number;
  status: string;
  items: IOrderItem[];
}

// Hardcoded orders data
const orders: IOrder[] = [
  {
    _id: "order1",
    userId: "user1",
    totalAmount: 100,
    status: "Pending",
    items: [
      { productId: "product1", quantity: 2 },
      { productId: "product2", quantity: 1 },
    ],
  },
  {
    _id: "order2",
    userId: "user2",
    totalAmount: 200,
    status: "Shipped",
    items: [
      { productId: "product3", quantity: 1 },
      { productId: "product4", quantity: 4 },
    ],
  },
];

const OrderItem: React.FC<{ item: IOrderItem }> = ({ item }) => {
  return (
    <div className="order-item p-4 mb-2 border rounded shadow">
      <p>Product ID: {item.productId}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
};

const Order: React.FC<{ order: IOrder }> = ({ order }) => {
  return (
    <div className="order p-4 border rounded shadow mb-4">
      <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
      <p>User ID: {order.userId}</p>
      <p>Total Amount: ${order.totalAmount}</p>
      <p>Status: {order.status}</p>
      <div className="mt-2">
        <h3 className="text-lg font-semibold mb-2">Items:</h3>
        {order.items.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const OrdersPage: React.FC = () => {
  return (
    <div className="orders-page p-8">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      {orders.map((order) => (
        <Order key={order._id} order={order} />
      ))}
    </div>
  );
};

export default OrdersPage;
