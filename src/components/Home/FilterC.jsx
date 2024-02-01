import React, { useState } from "react";

const FilterC = ({ data, setData }) => {
    // const [filter, setFilter] = useState("");
  const filterProduct = (cat) => {
    const updated = data.filter((x) => x.category === cat);
    setData(updated);
  };
  return (
    <div className="bg-white rounded-md m-4 p-2">
      <h2 className="p-2">Filter by Category</h2>
      <div className="m-4 flex flex-col">
        <label htmlFor="">
          <input type="radio" name="test" onClick={() => filterProduct(data)} />
          <span className="checkmark p-2">All</span>
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="test"
            onClick={() => filterProduct("men's clothing")}
          />
          <span className="checkmark p-2">Men's Clothing</span>
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="test"
            onClick={() => filterProduct("women's clothing")}
          />
          <span className="checkmark p-2">Women's Clothing</span>
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="test"
            onClick={() => filterProduct("jewellery")}
          />
          <span className="checkmark p-2">Jewellery</span>
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="test"
            onClick={() => filterProduct("electronic")}
          />
          <span className="checkmark p-2">Electronic</span>
        </label>
      </div>
    </div>
  );
};

export default FilterC;
