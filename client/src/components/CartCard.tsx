import CartProductImage from "../../public/CartProductImage.png";

const CartCard = () => {
  return (
    <div className="flex  justify-between items-center border-b">
      <div>
        <img
          className="w-[80px] h-[96px]"
          src={CartProductImage}
          alt="CartImage"
        />
      </div>
      <div className="flex justify-between px-5 w-[80px] h-[32px] items-center border border-black rounded-sm">
        <button>+</button>
        <button>-</button>
      </div>
      <div>
        <h1>$19.19</h1>
      </div>
    </div>
  );
};

export default CartCard;
