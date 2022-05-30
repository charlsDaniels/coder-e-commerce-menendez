import { addDoc, getFirestore, collection } from "firebase/firestore";

const db = getFirestore();

var products = [
  {
    categoryCode: "CAMISAS",
    categoryDescription: "camisas",
    title: "Tiger",
    description: "Camisa animal print de seda",
    price: 5600,
    pictureUrl:
      "https://m.media-amazon.com/images/I/71a6GCh-AML._AC_UL320_.jpg",
    sizes: [
      { id: "S", stock: 5 },
      { id: "M", stock: 10 },
      { id: "L", stock: 5 },
    ],
  },
];

products.forEach(function (obj) {
  addDoc(collection(db, "products"), {
    categoryCode: obj.categoryCode,
    categoryDescription: obj.categoryDescription,
    title: obj.title,
    description: obj.description,
    price: obj.price,
    pictureUrl: obj.pictureUrl,
    sizes: obj.sizes,
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
