import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Brand from "../../Brand/Logo";
import AsideMenu from "./Aside/AsideMenu";
import NavigationItems from "./NavigationItems/NavigationItems";

const pages = ["Computadoras", "Vehículos", "Ropa"];

const TheNavbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <AsideMenu pages={pages} />

          <Brand />

          <NavigationItems pages={pages} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TheNavbar;
