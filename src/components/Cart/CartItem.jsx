import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CartContext } from "../../hoc/providers/CartProvider";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const cartContext = useContext(CartContext);

  const productTitle = (item) => {
    return `${item.categoryId.slice(0, -1)} ${item.title}`;
  };

  const totalAmountByItem = (item) => {
    const sumBySizes = item.sizes.reduce((acc, item) => acc + item.quantity, 0);
    return sumBySizes * item.price;
  };

  return (
    <Card
      elevation={5}
      key={item.id}
      sx={{
        display: "flex",
        gap: 10,
        borderRadius: 3,
        height: 230,
        mb: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            textTransform: "capitalize",
          }}
        >
          {productTitle(item)}
        </Typography>
        <Typography variant="body2" ml={2}>
          ${item.price},00
        </Typography>

        <Typography variant="body1" mt={2} mb={0}>
          Cantidad
        </Typography>

        {item.sizes.map((size) => (
          <Typography key={size.id} variant="body2" ml={2} sx={{ width: 200 }}>
            Talle {size.id}: {size.quantity} unidades
          </Typography>
        ))}

        <Typography variant="body1" mt={2} mb={2}>
          Total producto: ${totalAmountByItem(item)}
        </Typography>
        <Button
          color="error"
          variant="contained"
          size="small"
          onClick={() => cartContext.removeItem(item)}
        >
          Eliminar
        </Button>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ objectFit: "contain" }}
        image={item.pictureUrl}
        alt={item.title}
      />
    </Card>
  );
};

export default CartItem;
