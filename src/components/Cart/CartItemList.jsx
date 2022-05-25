import React from "react";
import { useContext } from "react";
import { CartContext } from "../../hoc/providers/CartProvider";
import CartItem from "./CartItem";

const CartItemList = () => {
  const cartContext = useContext(CartContext);

  return cartContext.cart.map((item) => <CartItem key={item.id} item={item} />);
};

export default CartItemList;
