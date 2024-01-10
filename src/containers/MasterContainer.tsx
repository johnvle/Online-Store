import { useState, useEffect } from "react";
import {
  Stack,
  Container,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import Loading from "../utility-components/loading";

export const MasterContainer = (props) => {
  const [products, setProducts] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileOverflow = isMobile ? "normal" : "auto";

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
      <Stack
        sx={{
          margin: "2px",
          padding: "2px",
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          overflow: mobileOverflow,
        }}
      >
        {products.length > 0 ? (
          <ProductCard
            productData={products}
            onProductClick={props.onProductClick}
          ></ProductCard>
        ) : (
          <Loading></Loading>
        )}
      </Stack>
    </>
  );
};
