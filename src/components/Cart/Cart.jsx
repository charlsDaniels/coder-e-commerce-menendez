import React from "react";
import { useContext } from "react";
import { CartContext } from "../../hoc/providers/CartProvider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CartItemList from "./CartItemList";
import CheckoutForm from "./CheckoutForm";
import Empty from "../Navigation/Empty";

const Cart = () => {
  const cartContext = useContext(CartContext);

  if (cartContext.isEmpty()) {
    return (
      <Empty
        messages={[
          "Todavía no agregaste productos al carrito...",
          "Empezá a comprar!",
        ]}
      />
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
