import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Banner from "../Components/Home/Banner";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Outlet />
        <Footer></Footer>

        {/* diff */}
        {/* Products  */}
        {/* Stat */}
        {/* Review */}
        {/* Accordion */}
        {/* Delivery Process */}
      </div>
    </div>
  );
};

export default HomeLayout;
