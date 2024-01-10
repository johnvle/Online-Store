import { Box, CardMedia, Typography } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";

export const ProductImage = (props) => {
  return (
    <>
      <Box position="relative">
        <Box
          border={1}
          borderColor="#CCCCCC"
          sx={{
            px: "7px",
            py: "3px",
            borderRadius: "50px",
            position: "absolute",
            top: 90,
            right: 0,
            zIndex: 1,
            scale: "70%",
            background: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <StarIcon sx={{ color: "orange", fontSize: 20 }} />
          <Typography sx={{ marginLeft: "4px" }}>
            {props.rating.rate}
          </Typography>
          <Typography sx={{ marginLeft: "4px", marginRight: "2px" }}>
            {"("}
            {props.rating.count}
            {")"}
          </Typography>
        </Box>
        <CardMedia
          border={1}
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
