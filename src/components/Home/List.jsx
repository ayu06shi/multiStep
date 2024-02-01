import { typographyClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import FilterC from "./FilterC";

const List = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data: ", error.message);
      }
    };

    fetchData();
  }, []);

  const Loading = () => {
    return (
        <>
            <div>
                <Skeleton height={360}/>
            </div>
        </>
    );
  }

  return (
    <div>
      <div className="container grid lg:grid-cols-4 md:grid-cols-2">
        {products.map((values, index) => {
          return (
            <>
            <div className="rounded-md h-fit">
              <div className="relative bg-white rounded-md h-[400px] justify-evenly hover:scale-105 m-4 gap-y-2 flex flex-col p-4 transition-all duration-200">
                <img className="justify-center items-center h-[180px] w-[180px]" src={values.image} alt="" />
                <h3 className="font-bold">{values.title}</h3>
                {/* <p>{values.description}</p> */}
                <p className="">Price: Rs.{values.price}</p>
                <h3 className="bg-purple-600 p-2 rounded-md text-center hover:bg-purple-500 transition-all duration-200 text-white">Buy</h3>
                {/* {rating.map((values, index)=>{
                    <div key={index}>
                        <p>Rating: {values.rating[0]}</p>
                    </div>
                })} */}
                
              </div>
            </div>
            </>
          );
        })}
        <FilterC data={products}/>
      </div>
    </div>
  );
};

export default List;
