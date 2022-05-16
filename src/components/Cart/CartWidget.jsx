import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';

const CartWidget = () => {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Ver carrito">
                <IconButton sx={{ p: 0 }}>
                    <Badge badgeContent={4} color="success">
                        <ShoppingCart alt="Carrito de compras" color="secondary" fontSize="large" />
                    </Badge>
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default CartWidget;

