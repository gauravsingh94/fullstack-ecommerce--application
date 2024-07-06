const CartBottom = () => {
  return (
    <div className="w-full">
      <div className="text-black mb-4">Total: $234</div>
      <button className="w-full mt-2 p-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out">
        Checkout
      </button>
    </div>
  );
};

export default CartBottom;
