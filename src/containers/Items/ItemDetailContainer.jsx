import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Loader from "../../components/UI/Loader";
import ItemDetail from "../../components/Items/ItemDetail";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/firebase/querys";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async() => {
    setLoading(true);
    try {
      const product = await fetchProductById(productId);
      setProduct({ id: product.id, ...product.data() });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      {loading && <Loader />}

      {product && <ItemDetail item={product} />}
    </Box>
  );
};

export default ItemDetailContainer;
