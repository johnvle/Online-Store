import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DetailedContainer } from "./containers/DetailedContainer";
import { MasterContainer } from "./containers/MasterContainer";
import "./App.css";
import './assets/fonts'; 

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={2}>
      {isMobile ? (
        <Grid item xs={12} bgcolor="secondary.light">
          Master Container
          <MasterContainer />
        </Grid>
      ) : (
        <>
          <Grid item xs={4} bgcolor="secondary.light">
            <Typography>Master Container</Typography>
            <MasterContainer />
          </Grid>
          <Grid item xs={8} bgcolor="primary.light">
            <DetailedContainer />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default App;
