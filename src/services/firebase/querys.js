import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  addDoc,
  where,
} from "firebase/firestore";

require("./initialize");

const db = getFirestore();

const fetchCategories = async () => {
  const categoriesCollection = collection(db, "categories");
  const response = await getDocs(categoriesCollection);
  return response;
};

const fetchProducts = async (categoryId) => {
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

  return response;
};

const fetchProductById = async (productId) => {
  const productRef = doc(db, "products", productId);
  const response = await getDoc(productRef);
  return response;
};

const addOrder = async (order) => {
  const orders = collection(db, "orders");
  const response = addDoc(orders, order);
  return response;
};

export { fetchCategories, fetchProducts, fetchProductById, addOrder };
