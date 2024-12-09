import React from "react";
import HomeButton from "../components/HomeButton";

const AddCoffee = () => {
  const handleAddToTheMenuSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <HomeButton />

      <div className="bg-backgroundTransparent rounded-md h-max lg:w-3/4 p-10 m-5">
        <h2 className="text-textPrimary font-rancho text-3xl mb-10">
          Add To The Menu
        </h2>
        <form onSubmit={handleAddToTheMenuSubmit} className="grid lg:grid-cols-2 grid-cols-1 gap-4" action="">
          <div>
            <div className="flex flex-col gap-1">
              <label className="font-bold font-rancho" htmlFor="coffee_name">
                Coffee Name
              </label>
              <input
                className="bg-white text-sm p-2 rounded-md text-textPrimary"
                required
                placeholder="Coffee Name"
                type="text"
                name="coffee_name"
                id=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold font-rancho" htmlFor="chef_name">
                Chef Name
              </label>
              <input
                className="bg-white text-sm p-2 rounded-md text-textPrimary"
                required
                placeholder="Chef Name"
                type="text"
                name="chef_name"
                id=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold font-rancho" htmlFor="supplier_name">
                Supplier Name
              </label>
              <input
                className="bg-white text-sm p-2 rounded-md text-textPrimary"
                required
                placeholder="Supplier Name"
                type="text"
                name="supplier_name"
                id=""
              />
            </div>
          </div>
          <div>
            {" "}
            <div className="flex flex-col gap-1">
              <label className="font-bold font-rancho" htmlFor="test_type">
                Test Type
              </label>
              <input
                className="bg-white text-sm p-2 rounded-md text-textPrimary"
                required
                placeholder="Test Type"
                type="text"
                name="test_type"
                id=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold font-rancho" htmlFor="category">
                Which Category
              </label>
              <input
                className="bg-white text-sm p-2 rounded-md text-textPrimary"
                required
                placeholder="Which Category"
                type="text"
                name="category"
                id=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold font-rancho" htmlFor="details">
                In Details
              </label>
              <input
                className="bg-white text-sm p-2 rounded-md text-textPrimary"
                required
                placeholder="In Details"
                type="text"
                name="details"
                id=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 col-span-2">
            <label className="font-bold font-rancho" htmlFor="photo_url">
              Photo Url
            </label>
            <input
              className="bg-white text-sm p-2 rounded-md text-textPrimary"
              required
              placeholder="Photo Url"
              type="text"
              name="photo_url"
              id="" 
            />
          </div>
          <button className="col-span-2 my-2 bg-backgroundSecondary font-rancho  shadow-md text-textPrimary font-extrabold rounded-md py-1">Let's Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
