import { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from "@mui/material/CardActions";
import ItemCount from "./ItemCount";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Item = ({ item }) => {

    const [openModal, setShowModal] = useState(false)
    const [purchasedItems, setPurchasedItems] = useState(0)

    const onAddHandler = (quantity) => {
        setPurchasedItems(quantity)
        setShowModal(true)
    }

    const handleCloseModal = () => setShowModal(false);

    return (
        <Box sx={{ width: 350 }}>
            <Card elevation={5} sx={{ borderRadius: 3 }}>
                <CardContent>
                    <CardHeader
                        title={item.title}
                        subheader={item.description}
                        sx={{ pt: 0 }}
                    />
                    <CardMedia
                        component="img"
                        sx={{ objectFit: 'contain' }}
                        height="235"
                        image={item.pictureUrl}
                        alt="Camisa"
                    />
                </CardContent>

                <CardActions sx={{ justifyContent: 'center' }}>
                    <ItemCount stock={10} initial={3} onAdd={onAddHandler}></ItemCount>
                </CardActions>
            </Card>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Excelente! Agregaste {purchasedItems} productos!
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
}

export default Item;