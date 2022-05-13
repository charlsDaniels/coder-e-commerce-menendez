import ItemCount from "./ItemCount";
import { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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


const ItemListContainer = ({ greeting }) => {

    const [openModal, setShowModal] = useState(false)
    const [purchasedItems, setPurchasedItems] = useState(0)

    const onAddHandler = (quantity) => {
        setPurchasedItems(quantity)
        setShowModal(true)
    }

    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <Box>
                <Typography
                    variant='h5'
                >
                    {greeting}
                </Typography>

                <Box m={2}>
                    <ItemCount stock={10} initial={3} onAdd={onAddHandler} />
                </Box>

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
        </>
    )
}

export default ItemListContainer;