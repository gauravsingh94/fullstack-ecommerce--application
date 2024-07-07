import React, { useState } from "react";
import ProductCardAdmin from "../../components/ProductCardAdmin";
import PageChange from "../../components/PageChange";

const ProductsPageAdmin = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="mb-6">
        <h1 className="text-4xl font-bold">Products</h1>
      </div>
      {/* Button moved to the left */}
      <div className="mb-4 ml-40 mr-auto">
        <button
          className="p-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out"
          onClick={togglePopup}
        >
          Create Product
        </button>
      </div>
      {/* Grid of product cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex justify-center">
          <ProductCardAdmin/>
        </div>
        <div className="flex justify-center">
          <ProductCardAdmin/>
        </div>
        <div className="flex justify-center">
          <ProductCardAdmin/>
        </div>
        <div className="flex justify-center">
          <ProductCardAdmin/>
        </div>
        <div className="flex justify-center">
          <ProductCardAdmin/>
        </div>
        <div className="flex justify-center">
          <ProductCardAdmin/>
        </div>
        <div className="flex justify-center">
          <ProductCardAdmin/>
        </div>
        <div className="flex justify-center">
          <ProductCardAdmin/>
        </div>
      </div>
      <div className="mt-8">
        <PageChange />
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
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                ></textarea>
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
                <label className="block text-sm font-medium mb-2">Image URL</label>
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

export default ProductsPageAdmin;
