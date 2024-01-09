import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export const ProductCard = (props) => {
  console.log(props.productData);

  const testProduct = props.productData[0];
  console.log("product data:", props.productData[0]);

  return (
    <Box width="90%" sx={{ p: 2, border: "5px dashed black" }}>
      <Card sx={{ display: "flex" }}>
        <Box>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image={testProduct.image}
            alt="Live from space album cover"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography sx={{ color: "purple", fontSize: "medium" }}>
              {testProduct.category}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "large",
              }}
            >
              {testProduct.title}
            </Typography>
            <Typography
              sx={{
                color: "grey",
                textOverflow: "ellipsis",
              }}
            >
              {testProduct.description}
            </Typography>
            <Typography sx={{ fontWeight: "bolder", fontSize: "large" }}>
              {testProduct.price}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};
