import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const { title, brand, price, description, image_url } = useLoaderData();
  //   console.log(data);
  return (
    <div className="grid justify-items-center">
      <h1 className="font-extrabold">Product Details Page</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl text-teal-500 font-bold">{title}</h1>
            <h1 className="text-2xl text-cyan-500 font-bold">{brand}</h1>
            <p className="py-6">{description}</p>
            <p className="py-6 font-bold">$${price}</p>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
