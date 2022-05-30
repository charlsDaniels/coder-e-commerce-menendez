import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Brand from "../../Brand/Logo";
import AsideMenu from "./Aside/AsideMenu";
import NavigationItems from "./NavigationItems/NavigationItems";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../../services/firebase/querys";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async() => {
    const categories = await fetchCategories();
    setCategories(
      categories.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <AsideMenu categories={categories} />

          <Brand />

          <NavigationItems categories={categories} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
