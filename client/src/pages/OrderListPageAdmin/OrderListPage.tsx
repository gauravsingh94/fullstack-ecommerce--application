import OrderListCardsAdmin from "../../components/OrderListCardsAdmin";

const OrderListPage = () => {
  return (
    <div className="px-8">
      <h1 className="text-[40px]">Orders</h1>
      <div className="mb-2">
        <OrderListCardsAdmin />
      </div>
      <div className="mb-2">
        <OrderListCardsAdmin />
      </div>
      <div className="mb-2">
        <OrderListCardsAdmin />
      </div>
    </div>
  );
};

export default OrderListPage;
