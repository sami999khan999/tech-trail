import { useSelector } from "react-redux";
import Card from "../components/Card";

const Products = () => {
  const { items: data, status } = useSelector((state) => state.products);

  return (
    <div className="products-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold utlity-font text-center mb-10">
        Browse products
      </h2>
      <h3 className="status tuppercase text-xl font-semibold utlity-font text-center mb-10">
        {status}
      </h3>
      <div className="products-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
