import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export const DetailedProductView = (props) => {
  console.log("PRODUCT DATA", props.productData);
  const product = props.productData;
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100vh"
      backgroundColor="white"
    >
      <Card >
        <Box
          display="flex"
          justifyContent="center"
          m="16px"
          sx={{
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 5px rgba(227,227,227,1)",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={product.image}
            alt="Product Image"
          ></CardMedia>
        </Box>
        <CardContent>
          <Box>
            <Typography sx={{ color: "purple" }}>
              {product.category[0].toUpperCase()}
              {product.category.slice(1)}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "large" }}>{product.title}</Typography>
          </Box>
          <Box
            sx={{
              color: "grey",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            <Typography>{product.description}</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "large" }}>
              {"$"}
              {product.price}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
