import NavBar from './components/Navigation/NavBar/NavBar';
import Container from '@mui/material/Container';
import ItemListContainer from './components/Products/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <Container maxWidth="lg" sx={{ marginTop: 6 }}>
        <ItemListContainer greeting="Bienvenido!!!"/>
      </Container>
    </div>
  );
}

export default App;
