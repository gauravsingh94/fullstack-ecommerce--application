import ProductImage from "../../public/ProductImage.png";
const ProductCard = () => {
  return (
    <div className="w-[262px] h-[349pxs] flex flex-col gap-2">
      <div>
        <img src={ProductImage} alt="" />
      </div>
      <h1 className="font-semibold">Light Beige Pillow</h1>
      <p className="font-semibold">$3.99</p>
      <button className="mt-2 p-2 bg-black text-white rounded hover:bg-white">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
