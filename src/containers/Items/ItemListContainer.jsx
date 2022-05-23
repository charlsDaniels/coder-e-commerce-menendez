//@ts-check
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ItemList from "../../components/Items/ItemList";
import Loader from "../../components/UI/Loader";
import { productsDb } from "../../db/db";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const products = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (categoryId) {
            resolve(
              productsDb.filter((product) => product.categoryId === categoryId)
            );
          } else {
            resolve(productsDb);
          }
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
    console.log(categoryId);
  }, [categoryId]);

  return (
    <Box>
      <Loader visible={loading} />

      {products && (
        <Box>
          <Typography
            variant="h5"
            mb={5}
            sx={{ textAlign: "center", textTransform: "capitalize" }}
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
