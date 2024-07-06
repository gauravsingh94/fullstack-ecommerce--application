import ProductCard from "../../components/ProductCard";
import PageChange from "../../components/PageChange";
const ProductsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="mb-6">
        <h1 className="text-[40px]">Products</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex justify-center">
          <ProductCard />
        </div>
        <div className="flex justify-center">
          <ProductCard />
        </div>
        <div className="flex justify-center">
          <ProductCard />
        </div>
        <div className="flex justify-center">
          <ProductCard />
        </div>
        <div className="flex justify-center">
          <ProductCard />
        </div>
        <div className="flex justify-center">
          <ProductCard />
        </div>
        <div className="flex justify-center">
          <ProductCard />
        </div>
        <div className="flex justify-center">
          <ProductCard />
        </div>
      </div>
      <div className="mt-8">
        <PageChange />
      </div>
    </div>
  );
};

export default ProductsPage;
