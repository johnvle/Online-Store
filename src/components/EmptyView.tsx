import { Box, Typography } from "@mui/material";

export const EmptyView = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          border: "1px solid black",
        }}
      >
        <Typography sx={{ color: "purple", fontSize: "small" }}>
          Nothing to display...
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: "large" }}>
          Select an item to display
        </Typography>
        <Typography sx={{ color: "grey" }}>
          Select an item from the master view to display details in the detail
          view.
        </Typography>
      </Box>
    </>
  );
};
