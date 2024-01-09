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
              padding: 2,
              maxHeight: 200,
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
              borderRadius="5px"
              boxShadow="0 0 5px rgba(0, 0, 0, 0.3)"
            >
              <ProductImage image={product.image}></ProductImage>
            </Box>
            <Box

              sx={{ display: "flex", flexDirection: "column" }}
            >
              <CardContent>
                <Box>
                  <Box id="Product Category" border={1}>
                    <Typography sx={{ color: "purple" }}>
                      {product.category[0].toUpperCase()}
                      {product.category.slice(1)}
                    </Typography>
                  </Box>
                  <Box
                    id="Product Name"
                    border={1}
                    my={1}
                    sx={{
                      maxWidth: 300,
                      maxHeight: 50,
                      overflow: "hidden",
                      lineHeight: "25px",
                      whiteSpace: "normal",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "large",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {product.title}
                    </Typography>
                  </Box>
                  <Box
                    id="Product Desc"
                    sx={{
                      maxWidth: 300,
                      maxHeight: 25,
                      color: "grey",
                      overflow: "hidden",
                    }}
                    border={1}
                  >
                    <Typography
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.description}
                    </Typography>
                  </Box>
                  <Box
                    id="Product Price"
                    border={1}
                    sx={{
                      marginTop: "16px",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                      {"$"}
                      {product.price}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Box>
      ))}
    </>
  );
};
