//@ts-check
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ItemList from "../../components/Items/ItemList";
import Loader from "../../components/UI/Loader";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { fetchProducts } from "../../services/firebase/querys";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchProducts(categoryId);
      const products = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      if (products.length) {
        setProducts(products);
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
  }, [categoryId]);

  return (
    <Box>
      {loading && <Loader />}

      {products && (
        <Box>
          <Typography
            variant="h5"
            mb={5}
            textAlign="center"
            textTransform="capitalize"
          >
            {categoryId}
          </Typography>
          <ItemList items={products} />
        </Box>
      )}
    </Box>
  );
};

export default ItemListContainer;
