import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

const [product, setProduct] = useState("");
const item = useParams();

useEffect(() => {
  const db = getFirestore();
  const product = doc(db, "items", `${item.id}`);
  getDoc(product).then((snapshot) => {
    if (snapshot.exists()) {
      setProducts({ id: snapshot.id, ...snapshot.data() });
    }
  });
}, []);

return (
  <>
    <ItemDetail product={product} />
  </>
);
};

export default ItemDetailContainer;