import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ItemList from "../../components/Items/ItemList";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const products = await new Promise((resolved, rejected) => {
        setTimeout(() => {
          resolved([
            {
              id: "1",
              title: "Tiger",
              description: "Camisa animal print de seda",
              price: "$5.600",
              pictureUrl: "/images/camisa-tiger.jpg",
            },
            {
              id: "2",
              title: "Black",
              description: "Camisa negra de algodón",
              price: "$3.500",
              pictureUrl: "/images/camisa-negra.jpg",
            },
            {
              id: "3",
              title: "Hawaian",
              description: "Camisa hawaiana de seda",
              price: "$3.900",
              pictureUrl: "/images/camisa-hawaiana.jpg",
            },
          ]);
        }, 2000);
      });
      setProducts(products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress />
      </Backdrop>

      {products && <ItemList items={products} />}
    </Box>
  );
};

export default ItemListContainer;
