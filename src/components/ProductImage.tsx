import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export const ProductImage = (props) => {
  return (
    <>
      <Box >
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain", // Ensures image fits while preserving aspect ratio
            width: "100px",
            height: "100px",
          }}
          image={props.image}
          alt="Product Image"
        ></CardMedia>
      </Box>
    </>
  );
};
