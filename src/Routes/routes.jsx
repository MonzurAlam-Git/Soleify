import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import About from "../Pages/About";
import ProductDetails from "../Components/Home/ProductDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Components/Dashboard/Dashboard";
import AllProducts from "../Components/Dashboard/AllProducts";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/shoes"),
      },
      {
        path: `/product/:id`,
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/shoes/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  //dashboard Layout
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-products",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
