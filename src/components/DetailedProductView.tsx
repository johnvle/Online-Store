import {
  Box,
  Rating,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface DetailedProductViewProps {
  productData: Product;
  onProductBack: (value: null) => void;
}

export const DetailedProductView = (props: DetailedProductViewProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const imageHeight = isMobile ? 250 : 300;
  const titleSize = isMobile ? "20px" : "32px";
  // const descHeight = isMobile ? "null" : "100px";
  // const mobileOverflow = isMobile ? "null" : "auto";
  const mobileIcon = isMobile ? "relative" : "normal";

  const product = props.productData;
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      backgroundColor="white"
      padding="20px"
    >
      <Box position={mobileIcon}>
        {isMobile && (
          <IconButton
            sx={{
              borderRadius: "50%",
              position: "absolute",
              top: 25,
              left: 25,
              zIndex: 1,
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
            }}
            onClick={() => props.onProductBack(null)}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <Box
          id="Product Media"
          display="flex"
          justifyContent="center"
          m="16px"
          sx={{
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          <CardMedia
            component="img"
            sx={{ py:3, width: "100%", height: imageHeight, objectFit: "contain" }}
            image={product.image}
            alt="Product Image"
          ></CardMedia>
        </Box>
        <CardContent>
          <Stack
            id="Product Info Stack"
            display="flex"
            flexDirection="column"
            height="350px"
          >
            <Box>
              <Typography
                sx={{ color: "purple", fontWeight: "regular", fontSize: "large" }}
              >
                {product.category[0].toUpperCase()}
                {product.category.slice(1)}
              </Typography>
            </Box>
            <Box id="Product Name">
              <Typography sx={{ fontSize: titleSize }}>
                {product.title}
              </Typography>
            </Box>
            <Box
              id="Product Description"
              display="flex"
              sx={{
                // maxHeight: descHeight,
                marginTop: "4px",
                py: "px",
                color: "grey",
                // overflow: mobileOverflow,
              }}
            >
              <Typography
                sx={{
                  color: "grey",
                  // overflow: mobileOverflow,
                  // textOverflow: mobileOverflow,
                  fontWeight: "light"
                }}
              >
                {product.description}
              </Typography>
            </Box>
            <Box
              id="Product Rating"
              display="flex"
              mt="40px"
              align-items="center"
            >
              <Rating
                readOnly
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
                marginTop: "40px",
                // py: "30px",
              }}
            >
              <Typography sx={{ fontWeight: "medium", fontSize: "24px" }}>
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
