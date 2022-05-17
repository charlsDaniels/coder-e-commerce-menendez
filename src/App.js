import TheNavbar from "./components/Navigation/Navbar/TheNavbar";
import Container from "@mui/material/Container";
import ItemListContainer from "./containers/Items/ItemListContainer";
import ItemDetailContainer from "./containers/Items/ItemDetailContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

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
      <TheNavbar />
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Breadcrumbs mb={4} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Ropa
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Hombres
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="#"
            aria-current="page"
          >
            Camisas
          </Link>
        </Breadcrumbs>

        {/* <ItemListContainer /> */}
        <ItemDetailContainer productId={2} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
