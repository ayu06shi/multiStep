import React, {useEffect, useState} from "react";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/limit=15");

        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error.message);
      }
    };

    fetchData();
  }, []);
  return <ProductProvider>{children}</ProductProvider>;
};

export default ProductProvider;
