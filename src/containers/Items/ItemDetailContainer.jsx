import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Loader from "../../components/UI/Loader";
import ItemDetail from "../../components/Items/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../../services/firebase/querys";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetchProductById(productId);
      const data = response.data();
      if (data) {
        setProduct({ id: response.id, ...data });
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
