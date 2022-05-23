import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../hoc/providers/CartProvider";
import { useContext } from "react";

const CartWidget = () => {
  const cartContext = useContext(CartContext)

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Ver carrito">
        <NavLink to="/cart">
          <IconButton sx={{ p: 0 }}>
            <Badge badgeContent={cartContext.cart.length} color="success">
              <ShoppingCart
                alt="Carrito de compras"
                color="secondary"
                fontSize="large"
              />
            </Badge>
          </IconButton>
        </NavLink>
      </Tooltip>
    </Box>
  );
};

export default CartWidget;
