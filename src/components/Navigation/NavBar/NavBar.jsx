import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Brand from "../../Brand/Logo";
import AsideMenu from "./Aside/AsideMenu";
import NavigationItems from "./NavigationItems/NavigationItems";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const db = getFirestore();
    const categoriesCollection = collection(db, "categories");
    const response = await getDocs(categoriesCollection);
    setCategories(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchCategories();
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
