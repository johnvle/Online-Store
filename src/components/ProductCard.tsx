import { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ProductImage } from "./ProductImage";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface Props {
  productData: Product[];
  onProductClick: (index: number) => void;
}

export const ProductCard = (props: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const handleProductClick = (index: number) => {
    setSelectedProduct(index);
    props.onProductClick(index);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const maxCardHeight = isMobile ? 150 : 200;
  const maxCardWidth = isMobile ? 300 : "100%";
  const cardTextWidth = isMobile ? 150 : "100%";

  return (
    <>
      {props.productData.map((product: Product, index: number) => (
        <Box
          key={index}
          sx={{
            p: 1,
          }}
        >
          <Box
            key={index}
            onClick={() => handleProductClick(index)}
            sx={{
              padding: 2,
              maxHeight: maxCardHeight,
              maxWidth: maxCardWidth,
              overflow: "clip",
              display: "flex",
              borderRadius: 2,
              borderColor: selectedProduct === index ? "purple" : "initial",
              borderStyle: selectedProduct === index ? "solid" : "none",
              borderWidth: "1px",
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                boxShadow:
                  selectedProduct === index ? "" : "0 0 2px rgba(0, 0, 0, 0.5)",
                cursor: "pointer",
              },
            }}
          >
            <Box
              height="150px"
              display="flex"
              alignItems="center"
              borderRadius="5px"
              boxShadow="0 0 2px rgba(0, 0, 0, 0.3)"
            >
              <ProductImage
                rating={product.rating}
                image={product.image}
              ></ProductImage>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 2,
              }}
            >
              <Box>
                <Box id="Product Category">
                  <Typography sx={{ color: "purple" }}>
                    {product.category[0].toUpperCase()}
                    {product.category.slice(1)}
                  </Typography>
                </Box>
                <Box
                  id="Product Name"
                  my={1}
                  sx={{
                    maxWidth: { md: 100, lg: 200, xl: 400 },

                    maxHeight: 50,
                    overflow: "hidden",
                    lineHeight: "25px",
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
                    maxWidth: { sm: "5px", md: 100, lg: 200, xl: 300 },
                    width: cardTextWidth,
                    maxHeight: 25,
                    color: "grey",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      fontWeight: "Light",
                    }}
                  >
                    {product.description}
                  </Typography>
                </Box>
                <Box
                  id="Product Price"
                  sx={{
                    marginTop: "16px",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                    {"$"}
                    {product.price}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
