import React from "react";

interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const product: IProduct = {
  name: "Product Name",
  description: "This is a detailed description of the product.",
  price: 99.99,
  category: "Category Name",
  image: "https://via.placeholder.com/150",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const ProductDetail: React.FC = () => {
  return (
    <div className="product-detail p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover mb-4 md:mb-0 md:mr-8"
        />
        <div className="product-info text-left">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-2">{product.category}</p>
          <p className="text-2xl text-green-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-lg mb-4">{product.description}</p>
          <button className="mt-4 p-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
