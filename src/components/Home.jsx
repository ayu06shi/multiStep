import React, { useState } from "react";
import Searchbar from "./Home/Searchbar";
import FilterPanel from "./Home/FilterPanel";
import List from "./Home/List";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  return (
    <div
      className="flex flex-col relative h-[95vh] w-[95vw] m-auto p-4 rounded-lg bg-white
    "
    >
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-purple-800">E-Mart</h1>
        <ul className="flex flex-row">
          <li className="flex flex-col">
            <h3 className="text-xl m-2 transition-all duration-200 p-1 px-2 cursor-pointer text-purple-800 hover:text-white hover:bg-purple-800 rounded-md relative group">Home</h3>
          </li>
          <li className="flex flex-col">
          <h3 className="text-xl m-2 transition-all duration-200 p-1 px-2  cursor-pointer text-purple-800 hover:text-white hover:bg-purple-800 rounded-md relative group">Orders</h3>
          </li>
          <li className="flex flex-col">
          <h3 className="text-xl m-2 transition-all duration-200 p-1 px-2  cursor-pointer text-purple-800 hover:text-white hover:bg-purple-800 rounded-md relative group">Cart</h3>
          </li>
        </ul>
      </div>
      {/* searchbar for filters */}
      <Searchbar />
      <div className="flex flex-1 overflow-y-auto">
        <div className="bg-purple-50 w-[280px]">
          {/* filter panels */}
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
        </div>

        <div className="bg-red-50 flex-1 overflow-y-auto">
          {/* List and Empty View */}
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
