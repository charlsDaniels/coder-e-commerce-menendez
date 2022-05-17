import { useState } from "react";
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    return (
        <Box sx={{ display: 'flex', gap: '10px'}}>
            {/* <Typography variant="body2">
                Elegir cantidad (máximo: {stock} unidades)
            </Typography> */}

            <ButtonGroup size="small" color="secondary">
                <Button disabled={quantity === 0} onClick={() => setQuantity(quantity - 1)}>-</Button>
                <Button>{quantity}</Button>
                <Button disabled={quantity === stock} onClick={() => setQuantity(quantity + 1)}>+</Button>
            </ButtonGroup>

            <Button size="small" color="secondary" disabled={quantity === 0} variant="outlined" onClick={() => onAdd(quantity)}>Agregar</Button>
        </Box>
    );
}

export default ItemCount;