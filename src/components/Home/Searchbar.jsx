import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";


const Searchbar = ({ value, changeInput }) => {
    const [search, setSearch] = useState("");
    const[data, setData] = useState("");
  return (
    <div className="flex items-center border-b-2 py-5 px-4">
      <SearchIcon className="text-slate-400 mr-[2rem]" />
      <input
        type="text"
        className="text-[1.2rem] outline-none border-none w-[100%]"
        placeholder="laptops"
        value={value}
        onChange={(e) => {
            setSearch(e.target.value);
        }}
      />
      {/* {data.filter((row)=>{
        if(search == ""){
            return row;
        }
        else if(row.title.toLowerCase().includes(search.toLowerCase())){
            return row;
        }
      }).map((row, i)=>{
            return(
               <div></div> 
            )
      })} */}
    </div>
  );
};

export default Searchbar;
