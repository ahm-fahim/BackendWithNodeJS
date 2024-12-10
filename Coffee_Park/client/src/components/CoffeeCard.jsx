import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEraser, FaEye, FaPen, FaRecycle, FaRemoveFormat } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";

const CoffeeCard = ({ items }) => {
  const {
    coffee_name,
    test_type,
    category,
    details,
    chef_name,
    photo_url,
    supplier_name,
  } = items;
  return (
    <div className="flex flex-row gap-5 items-center border border-backgroundSecondary  bg-backgroundTransparent shadow-sm rounded-md">
      <img className="w-48 h-36 rounded-md" src={photo_url} alt="" />
      <div>
        <h1 className="text-sm text-gray-600 font-poppins " > <span className="font-bold text-gray-800 font-rancho text-xl">Name : </span> {coffee_name}</h1>
        <p className="text-sm text-gray-600 font-poppins" > <span className="font-bold text-gray-800 font-rancho text-xl">Test : </span> {test_type}</p>
        <p className="text-sm text-gray-600 font-poppins" > <span className="font-bold text-gray-800 font-rancho text-xl">Category : </span> {category}</p>
          </div>
          <div className="flex flex-col gap-2 ml-auto">
              <Link className=" p-2 mr-2 rounded-sm bg-backgroundSecondary"><FaEye/></Link>
              <Link to={`/updateCoffee`} className=" p-2 mr-2 rounded-sm bg-gray-400"><FaPencil/></Link>
              <Link className=" p-2 mr-2 rounded-sm bg-rose-400"><AiOutlineDelete/> </Link>
          </div>
    </div>
  );
};

CoffeeCard.propTypes = {};

export default CoffeeCard;
