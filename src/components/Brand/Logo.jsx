import Typography from '@mui/material/Typography';

const Brand = () => {
  return (
    <Typography
      variant='h5'
      noWrap
      href="#"
      sx={{
        display: 'flex',
        flexGrow:  0.9,
        fontFamily: 'monospace',
        fontWeight: 700,
        color: '#000',
        textDecoration: 'none',
      }}
    >
      DeTodoStore
    </Typography>
  )
}

export default Brand;