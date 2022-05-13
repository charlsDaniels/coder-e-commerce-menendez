import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CartWidget from '../../../Cart/CartWidget';

const NavigationItems = ({ pages }) => {
    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
            
            <CartWidget />
        </>
    )
}

export default NavigationItems;

