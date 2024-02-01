import React, { useState } from "react";
import FilterListToggle from "./FilterListToggle";
import Sort from "./Sort";
import FilterC from "./FilterC";
import FilterP from "./FilterP";

const FilterPanel = ({ selectedCategory, selectToggle, products = [] }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   // Input filter
//   const [query, setQuery] = useState("");

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const filteredItems = products.filter((product) =>
//     product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
//   );

//   Radio filter

return (
    <div>
      <FilterC products/>
      <FilterP/>
      <Sort/>
    </div>
  );
};

export default FilterPanel;
