const AddProduct = () => {
  const handleSubmit = async (e) => {
    // const { id, title, brand, price, description, image_url } = product;

    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const productData = { brand, title, description, price, image_url, id };
    console.log(productData);
    await fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1 className="text-2xl text-center font-bold mb-5">
        Add Your Desired Product
      </h1>
      <form onSubmit={handleSubmit} className="grid gap-2 justify-center">
        <input
          className=" w-96 p-2  rounded bg-gray-200 border border-black "
          type="text"
          name="brand"
          placeholder="Brand"
        />
        <input
          className=" w-96 p-2  rounded bg-gray-200 border border-black "
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          className=" w-96 p-2  rounded bg-gray-200 border border-black "
          type="text"
          name="description"
          placeholder="Description"
        />
        <input
          className=" w-96 p-2  rounded bg-gray-200 border border-black "
          type="text"
          name="price"
          placeholder="Price"
        />
        <input
          className="p-2  w-96 rounded bg-gray-200 border border-black "
          type="text"
          name="image_url"
          placeholder="Image URL"
        />
        <input
          className="p-2  w-96 rounded bg-gray-200 border border-black mb-5"
          type="text"
          name="id"
          placeholder="Id"
        />
        <input
          className="btn btn-success text-white w-48 mx-auto  "
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
