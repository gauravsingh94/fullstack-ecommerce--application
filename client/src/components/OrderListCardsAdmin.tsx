const OrderListCardsAdmin = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex h-16 gap-4 justify-between items-center px-10 border border-gray-300 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100 cursor-pointer transform hover:-translate-y-1">
        <h1>Username</h1>
        <h2>Email</h2>
        <h2>Total:</h2>
        <h1>Price</h1>
        <h1>Status</h1>
      </div>
    </div>
  );
};

export default OrderListCardsAdmin;
