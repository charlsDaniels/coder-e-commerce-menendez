import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmaYqDKiTLmsdjfayCfn1ljjSMWhrPmrU",
  authDomain: "charltops-ecommerce.firebaseapp.com",
  projectId: "charltops-ecommerce",
  storageBucket: "charltops-ecommerce.appspot.com",
  messagingSenderId: "258733256274",
  appId: "1:258733256274:web:13af221ad663898cd3b98b",
  measurementId: "G-FPH0DEQ6T3",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
