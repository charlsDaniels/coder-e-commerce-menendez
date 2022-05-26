import React from "react";
import { useContext } from "react";
import { CartContext } from "../../hoc/providers/CartProvider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartItemList from "./CartItemList";
import { NavLink, Link } from "react-router-dom";

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
      <Box sx={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: 'wrap' }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {cartContext.cart.length && <CartItemList />}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" my={3}>
            Total carrito: ${cartContext.totalAmount()},00
          </Typography>

          <Button color="secondary" variant="contained">
            Pagar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
