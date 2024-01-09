import {
  Box,
  Rating,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";

export const DetailedProductView = (props) => {
  console.log("PRODUCT DATA", props.productData);
  const product = props.productData;
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      backgroundColor="white"
      padding="40px"
    >
      <Box>
        <Box
          id="Product Media"
          display="flex"
          justifyContent="center"
          m="16px"
          sx={{
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "30%", height: "300px", objectFit: "contain" }}
            image={product.image}
            alt="Product Image"
          ></CardMedia>
        </Box>
        <CardContent>
          <Stack
            id="Product Info Stack"
            display="flex"
            flexDirection="column"
            justify-content="space-between"
            height="300px"
          >
            <Box>
              <Typography
                sx={{ color: "purple", fontWeight: "bold", fontSize: "large" }}
              >
                {product.category[0].toUpperCase()}
                {product.category.slice(1)}
              </Typography>
            </Box>
            <Box id="Product Name">
              <Typography sx={{ fontSize: "32px" }}>{product.title}</Typography>
            </Box>
            <Box
              id="Product Description"
              sx={{
                height: "80px",
                marginTop: "4px",
                py: "2px",
                color: "grey",
                overflow: "auto",
                lineHeight: "25px",
              }}
            >
              <Typography>{product.description}</Typography>
            </Box>
            <Box
              id="Product Rating"
              display="flex"
              mt="20px"
              align-items="center"
            >
              <Rating
                name="product-rating-rounded-nearest-whole"
                value={Math.round(product.rating.rate)}
              />{" "}
              <Typography sx={{ marginLeft: 1 }}>
                {product.rating.rate}
              </Typography>
              <Typography sx={{ fontWeight: "light", marginLeft: 1 }}>
                {product.rating.count}
                {" reviews"}
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "auto",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                {"$"}
                {product.price}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Box>
    </Box>
  );
};
