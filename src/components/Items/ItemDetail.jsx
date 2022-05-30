import { useState } from "react";
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
  const [initialCount, setInitialCount] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showCheckoutBtn, setShowCheckoutBtn] = useState(false);

  const onAddHandler = (quantity) => {
    const selectedQuantity =
      initialCount == 1 ? quantity - 1 : quantity - initialCount;

    cartContext.addItem({ ...item, size: selectedSize }, selectedQuantity);
    setShowCheckoutBtn(true);
  };

  const selectSizeHandler = (size) => {
    const initialCount = cartContext.getItemInitialCount(item.id, size.id);
    setInitialCount(initialCount);
    setSelectedSize(size.id);
    setStock(size.stock);
  };

  const productTitle = () => {
    return `${item.categoryDescription.slice(0, -1)} ${item.title}`;
  };

  return (
    <Box sx={{ display: "flex", mt: 6, ml: 7, gap: 5, flexWrap: "wrap" }}>
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

      <Box height={400}>
        <Typography variant="h5" textTransform="capitalize">
          {productTitle()}
        </Typography>
        <Typography variant="body1" ml={2}>
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
            <ItemCount
              stock={stock}
              initial={initialCount}
              onAdd={onAddHandler}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default ItemDetail;
