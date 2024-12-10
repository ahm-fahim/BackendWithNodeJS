import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import Hero from "../components/Hero";

const Home = () => {
  const coffeeItems = useLoaderData();
  return (
    <div>
      <Hero />
      <div className="pt-16  backgroundImg">
        <div className="pb-10 flex flex-col justify-center items-center">
          <h1 className="font-rancho text-4xl font-bold text-center">
            Most Hottest Coffee
          </h1>
          <Link
            to="/addCoffee"
            className="my-2 font-rancho text-xl shadow-sm bg-backgroundSecondary py-2 px-4 rounded-sm"
          >
            Add To The Menu
          </Link>
        </div>
        <div className="w-5/6 m-auto grid lg:grid-cols-2 grid-col-1 gap-5">
          {coffeeItems.map((items) => (
            <CoffeeCard key={items._id} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
