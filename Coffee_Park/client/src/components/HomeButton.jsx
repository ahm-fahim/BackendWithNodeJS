import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div>
      <Link to="/" className="flex gap-2 items-center font-rancho text-xl text-textPrimary">
        <FaArrowLeft />
        Back To Home
      </Link>
    </div>
  );
};

export default HomeButton;
