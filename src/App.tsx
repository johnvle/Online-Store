import { useState } from 'react';
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
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
    console.log('PRODUCT from handleProductClick', product);
  };

  // IN PROGRESS: control the mobile view by checking whether the clickedProduct is true or not
  return (
    <Grid container spacing={2}>
      {isMobile && !clickedProduct ? (
        <Grid item xs={12} bgcolor="secondary.light">
          MOBILE VIEW
          <MasterContainer />
        </Grid>
      ) : (
        <>
          <Grid item xs={4} >
            <MasterContainer onProductClick={handleProductClick} />
          </Grid>
          <Grid item xs={8} >
            <DetailedContainer product={clickedProduct} />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default App;
