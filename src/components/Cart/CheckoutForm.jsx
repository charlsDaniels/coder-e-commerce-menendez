import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import OrderModal from "./OrderModal";
import { useState, useContext } from "react";
import { CartContext } from "../../hoc/providers/CartProvider";
import { addOrder } from "../../services/firebase/querys";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [openModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleCloseModal = () => {
    cartContext.clear();
    return navigate("/");
  };

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const order = {
      buyer: user,
      items: cartContext.cart,
      total: cartContext.totalAmount(),
    };
    try {
      const { id } = await addOrder(order);
      setOrderId(id);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const validateEmail = () => {
    if (user.email) {
      return String(user.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    return true;
  };

  const formIsComplete = () => {
    return Object.values(user).every((value) => value);
  };

  const formIsValid = () => {
    return formIsComplete() && validateEmail();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h5">
          Total carrito: ${cartContext.totalAmount()},00
        </Typography>

        <Typography variant="body1" mt={5}>Completa tus datos para finalizar la compra!</Typography>

        <FormControl
          color="secondary"
          onChange={handleInputChange}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          fullWidth
        >
          <TextField
            label="Nombre"
            name="name"
            color="secondary"
            size="small"
            value={user.name}
          />
          <TextField
            label="Teléfono"
            name="phone"
            color="secondary"
            size="small"
            value={user.phone}
          />
          <TextField
            label="Email"
            name="email"
            color="secondary"
            size="small"
            type="email"
            value={user.email}
            error={!validateEmail()}
          />

          <Button
            color="secondary"
            variant="contained"
            onClick={handleSubmit}
            disabled={!formIsValid()}
          >
            Comprar
          </Button>
        </FormControl>
      </Box>

      {openModal && <OrderModal orderId={orderId} onClose={handleCloseModal} />}
    </Box>
  );
};

export default CheckoutForm;
