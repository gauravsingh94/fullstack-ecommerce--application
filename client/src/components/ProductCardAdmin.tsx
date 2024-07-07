import { useState } from "react";
import ProductImage from "../../public/ProductImage.png";
const ProductCardAdmin = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="w-[262px] h-[349pxs] flex flex-col gap-2">
      <div>
        <img src={ProductImage} alt="" />
      </div>
      <h1 className="font-semibold">Light Beige Pillow</h1>
      <p className="font-semibold">$3.99</p>
      <div className="flex justify-between">
        <button
          className="mt-2 p-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out"
          onClick={togglePopup}
        >
          Update
        </button>
        <button className="mt-2 p-2 bg-red-600 text-white rounded hover:bg-white hover:text-black border transition duration-300 ease-in-out">
          Delete
        </button>
      </div>
      {/* Popup form */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={togglePopup}
            >
              X
            </button>
            <h2 className="text-xl font-semibold mb-4">Create Product</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Price</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCardAdmin;
