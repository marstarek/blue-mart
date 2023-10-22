import { Outlet } from "react-router-dom";
import { useMatches } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  const matches = useMatches();
  console.log(matches)
  return (
    <div className="flex flex-col" >
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Layout

