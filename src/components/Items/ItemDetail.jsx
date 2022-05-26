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

  const [stock, setStock] = useState(null);
  const [initial, setInitial] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showCheckoutBtn, setShowCheckoutBtn] = useState(false);

  const onAddHandler = (quantity) => {
    cartContext.addItem({ ...item, size: selectedSize }, quantity);
    setShowCheckoutBtn(true);
  };

  const selectSizeHandler = (size) => {
    setSelectedSize(size.id);
    setStock(size.stock);
    setInitial(1);
  };

  const productTitle = () => {
    return `${item.categoryId.slice(0, -1)} ${item.title}`;
  };

  return (
    <Box sx={{ display: "flex", mt: 6, ml: 7, gap: 5 }}>
      <Box>
        <Box
          component="img"
          sx={{
            width: 265,
          }}
          alt={item.description}
          src={item.pictureUrl}
        />
      </Box>

      <Box sx={{height: 400}}>
        <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
          {productTitle()}
        </Typography>
        <Typography variant="body2" ml={2}>
          ${item.price},00
        </Typography>
        <Typography variant="body2" mt={2}>
          Hasta 6 cuotas sin interés
        </Typography>

        {!showCheckoutBtn && (
          <Box mt={3} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="overline">Selecciona tu talla</Typography>

            <ButtonGroup size="small" color="secondary" variant="outlined">
              {item.sizes.map((size) => (
                <Button
                  key={size.id}
                  onClick={() => selectSizeHandler(size)}
                  style={{
                    color: selectedSize === size.id && "#fff",
                    backgroundColor: selectedSize === size.id && "#3B253B",
                  }}
                >
                  {size.id}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        )}

        <Typography variant="body2" my={3}>
          {item.description}
        </Typography>

        {showCheckoutBtn && (
          <Button
            component={NavLink}
            to={`/cart`}
            color="secondary"
            variant="contained"
            size="small"
          >
            Finalizar compra
          </Button>
        )}

        {stock && !showCheckoutBtn && (
          <>
            <Typography variant="body2" my={1}>
              Stock disponible: {stock}
            </Typography>
            <ItemCount stock={stock} initial={initial} onAdd={onAddHandler} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default ItemDetail;
