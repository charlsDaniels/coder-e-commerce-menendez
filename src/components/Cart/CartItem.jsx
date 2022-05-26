import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CartContext } from "../../hoc/providers/CartProvider";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const cartContext = useContext(CartContext);

  const productTitle = (item) => {
    return `${item.categoryId.slice(0, -1)} ${item.title}`;
  };

  const quantityDetailText = (size) => {
    const text = size.quantity > 1 ? "unidades" : "unidad";
    return `Talle ${size.id}: ${size.quantity} ${text}`;
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
        flexDirection: "column",
        borderRadius: 3,
        mb: 3,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
        }}
      >
        <Box>
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
            <Typography
              key={size.id}
              variant="body2"
              ml={2}
              sx={{ width: 200 }}
            >
              {quantityDetailText(size)}
            </Typography>
          ))}
        </Box>
        <Box width={122}>
          <CardMedia
            component="img"
            sx={{ objectFit: "contain" }}
            image={item.pictureUrl}
            alt={item.title}
          />
        </Box>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: 'center' }}>
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
      </Box>
    </Card>
  );
};

export default CartItem;
