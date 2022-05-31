import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        mt: 10,
      }}
    >
      <Typography variant="h5" textAlign="center">
        Ups... parece que esa ruta no existe.
      </Typography>
      <Typography
        variant="h5"
        noWrap
        component={Link}
        to="/"
        sx={{
          flexGrow: 0.8,
          fontFamily: "monospace",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Volver al inicio
      </Typography>
    </Box>
  );
};

export default NotFound;
