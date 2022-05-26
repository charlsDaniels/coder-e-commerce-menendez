//@ts-check
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ItemList from "../../components/Items/ItemList";
import Loader from "../../components/UI/Loader";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      const db = getFirestore();
      const productsCollection = collection(db, "products");

      let response;

      if (categoryId) {
        const q = query(
          productsCollection,
          where("categoryCode", "==", categoryId.toUpperCase())
        );
        response = await getDocs(q);
      } else {
        response = await getDocs(productsCollection);
      }
      setProducts(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
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
