import React from "react";
import { useContext } from "react";
import { CartContext } from "../../hoc/providers/CartProvider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CartItemList from "./CartItemList";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Cart = () => {
  const cartContext = useContext(CartContext);

  if (cartContext.isEmpty()) {
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
          Todavía no agregaste productos al carrito...
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
          Empezá a comprar!
        </Typography>{" "}
      </Box>
    );
  }

  return (
    <>
      <Typography
        variant="h5"
        mb={5}
        textAlign="center"
        textTransform="capitalize"
      >
        Carrito
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <CartItemList />
        <CheckoutForm />
      </Box>
    </>
  );
};

export default Cart;
