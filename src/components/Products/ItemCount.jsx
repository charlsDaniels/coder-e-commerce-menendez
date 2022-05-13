import { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from "@mui/material/CardActions";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Card elevation={5} sx={{ borderRadius: 3 }}>
                <CardContent>
                    <CardHeader
                        title="Camisa tiger"
                        subheader="Hermosa camisa atigrada de material seda"
                    />
                    <CardMedia
                        component="img"
                        sx={{ objectFit: 'contain' }}
                        height="235"
                        image="/images/camisa.jpg"
                        alt="Camisa"
                    />
                </CardContent>

                <CardActions sx={{ flexDirection: 'column', gap: '10px' }}>
                    <Typography variant="body2">
                        Elegir cantidad (máximo: {stock} unidades)
                    </Typography>

                    <ButtonGroup color="secondary">
                        <Button disabled={quantity === 0} onClick={() => setQuantity(quantity - 1)}>-</Button>
                        <Button>{quantity}</Button>
                        <Button disabled={quantity === stock} onClick={() => setQuantity(quantity + 1)}>+</Button>
                    </ButtonGroup>

                    <Button disabled={quantity === 0} variant="outlined" onClick={() => onAdd(quantity)}>Agregar</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default ItemCount;