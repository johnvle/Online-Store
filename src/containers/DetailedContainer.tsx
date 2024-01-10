import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { EmptyView } from "../components/EmptyView";
import { DetailedProductView } from "../components/DetailedProductView";
import Loading from "../utility-components/loading";

// type enforce props and useState

export const DetailedContainer = (props) => {
  const [productDetail, setProductDetail] = useState(null);
  const [clickedProductID, setClickedProductID] = useState(null);

  // handle the passed down prop - props.product
  // check if its null , if not we can assign clickedProductID
  // this useEffect will trigger based off props.product dependency
  useEffect(() => {
    if (props.product !== null) {
      setClickedProductID(props.product + 1);
    }
  }, [props.product]);

  // this useEffect hook only fires if clickedProductID is NOT null
  // if it is not, we may send a fetch request to our desired endpoint
  useEffect(() => {
    if (clickedProductID !== null) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${clickedProductID}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setProductDetail(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [clickedProductID]);

  return (
    <>
      {clickedProductID === null ? (
        <EmptyView></EmptyView>
      ) : (
        <Box>
          {productDetail ? (
            <DetailedProductView onProductBack={props.onProductBack} productData={productDetail} />
          ) : (
            <Loading></Loading>
          )}
        </Box>
      )}
    </>
  );
};
