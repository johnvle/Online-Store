import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductImage } from "./ProductImage";

export const ProductCard = (props) => {
  return (
    <>
      {props.productData.map((product, index) => (
        <Box
          key={index}
          sx={{
            p: 1,
            mb: 2,
          }}
        >
          <Card
            key={index}
            onClick={() => props.onProductClick(index)} 
            sx={{
              p: 2,
              display: "flex",
              borderRadius: 4,
              border: "1px solid lightgray",
              "&:hover": {
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                cursor: "pointer",
              },
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="20px"
              borderRadius="5px"
              boxShadow="0 0 5px rgba(0, 0, 0, 0.3)"
            >
              <ProductImage image={product.image}></ProductImage>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Box>
                  <Typography sx={{ color: "purple" }}>
                    {product.category[0].toUpperCase()}
                    {product.category.slice(1)}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "large" }}>
                    {product.title}
                  </Typography>
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
            </Box>
          </Card>
        </Box>
      ))}
    </>
  );
};
