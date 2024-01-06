import { Outlet } from "react-router-dom";
import Navbar from "../../../Shared/Navbar/Navbar";
import Footer from "../../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";




const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;