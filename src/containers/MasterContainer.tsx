import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { ProductCard } from "../components/ProductCard";

export const MasterContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("DATAAAA", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        <ProductCard productData={products}></ProductCard>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </div>
  );
};
