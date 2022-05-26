import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Loader from "../../components/UI/Loader";
import ItemDetail from "../../components/Items/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getFirestore, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const db = getFirestore();
      const productRef = doc(db, "products", productId);
      const response = await getDoc(productRef);
      console.log(response);
      setProduct({ id: response.id, ...response.data() });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <Box>
      {loading && <Loader />}
      
      {product && <ItemDetail item={product} />}
    </Box>
  );
};

export default ItemDetailContainer;
