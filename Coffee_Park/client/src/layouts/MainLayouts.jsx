import { Outlet } from "react-router-dom";
import "./MainLayouts.css";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <Navbar/>
      <div className="mainLayouts-body text-gray-800 bg-backgroundTransparent">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
