import React from "react";
import { useContext } from "react";
import { CartContext } from "../../hoc/providers/CartProvider";
import CartItem from "./CartItem";
import Box from "@mui/material/Box";

const CartItemList = () => {
  const cartContext = useContext(CartContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {cartContext.cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default CartItemList;
