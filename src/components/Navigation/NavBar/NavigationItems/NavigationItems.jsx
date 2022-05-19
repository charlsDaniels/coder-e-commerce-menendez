import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CartWidget from "../../../Cart/CartWidget";
import { NavLink } from "react-router-dom";

const NavigationItems = ({ pages }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page, index) => (
          <Button
            component={NavLink}
            to={`/category/${page}`}
            style={({ isActive }) =>
              isActive ? {color: "#fff", textDecoration: 'underline'} : {color: "#000"}
            }
            key={index}
            sx={{ my: 2, display: "block", fontSize: 16 }}
          >
            {page}
          </Button>
        ))}
      </Box>

      <CartWidget />
    </>
  );
};

export default NavigationItems;
