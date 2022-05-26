import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CartWidget from "../../../Cart/CartWidget";
import { NavLink } from "react-router-dom";

const NavigationItems = ({ categories }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {categories.map((cat) => (
          <Button
            component={NavLink}
            to={`/category/${cat.description}`}
            style={({ isActive }) =>
              isActive ? {color: "#fff", textDecoration: 'underline'} : {color: "#000"}
            }
            key={cat.id}
            sx={{ my: 2, display: "block", fontSize: 16 }}
          >
            {cat.description}
          </Button>
        ))}
      </Box>

      <CartWidget />
    </>
  );
};

export default NavigationItems;
