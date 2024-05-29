import { useLoaderData } from "react-router-dom";
import Product from "../Home/Product";

const AllProducts = () => {
  const fetchedData = useLoaderData();
  console.log("All products page rendered with", fetchedData.length);
  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <div className="flex flex-wrap">
        {fetchedData.map((product) => (
          <Product key={product.key} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
