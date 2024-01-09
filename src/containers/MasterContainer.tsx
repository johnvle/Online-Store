import { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import { ProductCard } from "../components/ProductCard";

export const MasterContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Box
        sx={{
           
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pr: 1,
          overflow: "auto",
        }}
      >
        {products.length > 0 ? (
          <ProductCard productData={products} onProductClick={props.onProductClick}></ProductCard>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </>
  );
};
