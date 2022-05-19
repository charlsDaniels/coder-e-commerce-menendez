import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Loader from "../../components/UI/Loader";
import ItemDetail from "../../components/Items/ItemDetail";
import { productsDb } from "../../db/db";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const {productId} = useParams()
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const product = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(productsDb.find(product => product.id == productId));
        }, 2000);
      });
      setProduct(product);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Box>
      <Loader visible={loading} />

      {product && <ItemDetail item={product} />}
    </Box>
  );
};

export default ItemDetailContainer;
