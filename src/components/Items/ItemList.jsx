//@ts-check
import Box from "@mui/material/Box";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 5,
        flexWrap: "wrap",
      }}
    >
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default ItemList;
