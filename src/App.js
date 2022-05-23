import NavBar from "./components/Navigation/Navbar/NavBar";
import Container from "@mui/material/Container";
import ItemListContainer from "./containers/Items/ItemListContainer";
import ItemDetailContainer from "./containers/Items/ItemDetailContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./hoc/providers/CartProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#96C5B0",
      textColor: "white",
    },
    secondary: {
      main: "#553555",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Container maxWidth="lg" sx={{ mt: 6 }}>
            <Routes>
              <Route path="/" element={<ItemListContainer />}></Route>
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              ></Route>
              <Route
                path="/item/:productId"
                element={<ItemDetailContainer />}
              ></Route>
            </Routes>
          </Container>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
