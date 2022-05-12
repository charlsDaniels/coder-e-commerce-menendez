import './App.css';
import NavBar from './components/Navigation/NavBar/NavBar';
import ItemListContainer from './components/Products/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!!!" />
    </div>
  );
}

export default App;
