import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DetailedContainer } from "./containers/DetailedContainer";
import { MasterContainer } from "./containers/MasterContainer";
import "./App.css";
import "./assets/fonts";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // manage state for clicked product
  const [clickedProduct, setClickedProduct] = useState(null);
  const handleProductClick = (product) => {
    setClickedProduct(product);
    console.log("PRODUCT from handleProductClick", product);
  };

  // IN PROGRESS: control the mobile view by checking whether the clickedProduct is true
  return (
    <Box display="flex">
      {isMobile ? (
        <Container>
          {clickedProduct !== null ? (
            <DetailedContainer product={clickedProduct} />
          ) : (
            <MasterContainer onProductClick={handleProductClick} />
          )}
        </Container>
      ) : (
        <>
          <Box width={1 / 3} sx={{ borderRight: "1px solid lightgray" }}>
            <MasterContainer onProductClick={handleProductClick} />
          </Box>
          <Box width="100%">
            <DetailedContainer product={clickedProduct} />
          </Box>
        </>
      )}
    </Box>
  );
}

export default App;
