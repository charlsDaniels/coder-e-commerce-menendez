import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ItemCount from "./ItemCount";
import Modal from "@mui/material/Modal";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ItemDetail = ({ item }) => {
  const [purchasedItems, setPurchasedItems] = useState(0);
  const [openModal, setShowModal] = useState(false);

  const onAddHandler = (quantity) => {
    setPurchasedItems(quantity);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

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
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" ml={2}>
          {item.price}
        </Typography>
        <Typography variant="body2" mt={2}>
          Hasta 6 cuotas sin interés
        </Typography>

        <Box mt={3} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="overline">Selecciona tu talla</Typography>

          <ButtonGroup size="small" color="secondary">
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

        <ItemCount stock={10} initial={1} onAdd={onAddHandler}></ItemCount>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Excelente! Agregaste {purchasedItems} productos!
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default ItemDetail;
