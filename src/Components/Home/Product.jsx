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
        <div className="card-actions justify-items-end">
          <button className="btn btn-outline font-bold">${price}</button>
          <button className="btn btn-accent">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
