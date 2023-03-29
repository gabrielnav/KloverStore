import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCr0JJm7xLW_i2CG9mQRBbse-g-00bDag8",
  authDomain: "kloverstore-v2.firebaseapp.com",
  projectId: "kloverstore-v2",
  storageBucket: "kloverstore-v2.appspot.com",
  messagingSenderId: "225993148308",
  appId: "1:225993148308:web:60a8b3e030cfcb7588f181"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ChakraProvider>
    <App />
  </ChakraProvider>
</React.StrictMode>
);