import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <div className="text-gray-800">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
