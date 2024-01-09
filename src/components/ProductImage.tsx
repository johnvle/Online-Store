import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export const ProductImage = (props) => {
  return (
    <>
      <Box>
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={props.image}
          alt="Product Image"
        ></CardMedia>
      </Box>
    </>
  );
};
