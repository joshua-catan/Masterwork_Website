import { Outlet } from "react-router-dom";
import Navbar from './Layout/Navigation'
import Footer from "./Layout/footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;