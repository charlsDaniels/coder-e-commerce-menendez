import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ItemList from "../../components/Items/ItemList";
import Loader from "../../components/UI/Loader";
import { productsDb } from "../../db/db";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const products = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productsDb);
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
      <Loader visible={loading}/>

      {products && <ItemList items={products} />}
    </Box>
  );
};

export default ItemListContainer;
