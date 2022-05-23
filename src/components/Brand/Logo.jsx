import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <Typography
      variant='h5'
      noWrap
      component={Link}
      to="/"
      sx={{
        display: 'flex',
        flexGrow:  0.8,
        fontFamily: 'monospace',
        fontWeight: 700,
        color: "#000",
        textDecoration: 'none'
      }}
    >
      CharlClothes
    </Typography>
  )
}

export default Brand;