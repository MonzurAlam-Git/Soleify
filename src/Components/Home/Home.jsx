import Banner from "./Banner";
import Diff4Home from "./Diff4Home";
import FAQ from "./FAQ";
import Products from "./Products";

import Stat from "./Stat";
import CountDown from "./CountDown";
import Process from "./Process";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Home = () => {
  const fetchdata = useLoaderData();
  console.log(fetchdata);
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-5xl text-center font-bold text-teal-500 m-5">
        Eliminate Stress
      </h1>
      {/* diff */}
      <Diff4Home></Diff4Home>
      {/* Products  */}
      <h1 className="text-5xl text-center font-bold m-5">
        Find Your Dream Cat
      </h1>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3">
        {fetchdata.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      {/* Stat */}
      <Stat></Stat>
      {/* Review */}
      <CountDown></CountDown>

      {/* Accordion */}
      <FAQ></FAQ>
      {/* Delivery Process */}
      <Process></Process>
    </div>
  );
};

export default Home;
