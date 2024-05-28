import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, brand, price, description, image_url } = product;
  return (
    <div className="card card-compact w-48 h-96 bg-base-100 shadow-xl m-5">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-items-end grid grid-cols-2">
          <button className="btn btn-outline font-bold">${price}</button>
          <Link className="btn btn-accent text-white" to={`/product/${id}`}>
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
