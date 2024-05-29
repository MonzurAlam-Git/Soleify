import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-gray-300 min-h-screen p-12">
        <ul>
          <li className="bg-red-600 text-white font-bold  border border-black border-3 p-4 text w-full">
            <Link to="">Dashboard</Link>
          </li>
          <li className="bg-teal-400 text-white font-bold  border border-black border-3 p-4 text w-full">
            <Link to="/dashboard/all-products">All Products</Link>
          </li>
          <li className="bg-sky-600 text-white font-bold  border border-black border-3 p-4 text w-full">
            <Link to="/dashboard/add-products">Add Product</Link>
          </li>
          <li className="bg-blue-400 text-white font-bold  border border-black border-3 p-4 text w-full">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
