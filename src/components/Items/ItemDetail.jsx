import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ItemCount from "./ItemCount";
import { CartContext } from "../../hoc/providers/CartProvider";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const cartContext = useContext(CartContext);

  const [showCheckoutBtn, setShowCheckoutBtn] = useState(false);

  const onAddHandler = (quantity) => {
    cartContext.addItem(item, quantity);
    setShowCheckoutBtn(true);
  };

  const productTitle = () => {
    return `${item.categoryId.slice(0, -1)} ${item.title}`;
  };

  return (
    <Container sx={{ display: "flex", mt: 6, ml: 7, gap: 5 }}>
      <Box
        component="img"
        sx={{
          width: 265,
        }}
        alt={item.description}
        src={item.pictureUrl}
      />
      <Box>
        <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
          {productTitle()}
        </Typography>
        <Typography variant="body2" ml={2}>
          {item.price}
        </Typography>
        <Typography variant="body2" mt={2}>
          Hasta 6 cuotas sin interés
        </Typography>

        <Box mt={3} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="overline">Selecciona tu talla</Typography>

          <ButtonGroup size="small" color="secondary" variant="outlined">
            <Button>XS</Button>
            <Button>S</Button>
            <Button>M</Button>
            <Button>L</Button>
            <Button>XL</Button>
          </ButtonGroup>
        </Box>

        <Typography variant="body2" my={3}>
          {item.description}
        </Typography>

        {showCheckoutBtn ? (
          <Button
            component={NavLink}
            to={`/cart`}
            color="secondary"
            variant="contained"
            size="small"
          >
            Finalizar compra
          </Button>
        ) : (
          <ItemCount stock={10} initial={1} onAdd={onAddHandler} />
        )}
      </Box>
    </Container>
  );
};

export default ItemDetail;
