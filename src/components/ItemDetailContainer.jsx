/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState("");
  const item = useParams();

  useEffect(() => {
    const db = getFirestore();
    const prenda = doc(db, "items", `${item.id}`);
    getDoc(prenda).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, []);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;*/
import ItemDetail from "./ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

 useEffect(() =>{
    const db = getFirestore();
    
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  },[]);

  if (category === undefined) {
    return (
      <div className="">
        <ItemDetail products={products} />
      </div>
    );
  } else {
    const filterCategory = products.filter(
      (item) => item.category === category
    );
    return (
      <>
        <Center h="100px" color="black">
          <Heading as="h2" size="2xl">
            {category !== "Verano" ? `${category}` : "Verano"}
          </Heading>
        </Center>
        {filterCategory ? (
          <ItemDetail products={filterCategory} />
        ) : (
          <ItemDetail products={products} />
        )}
      </>
    );
  }
};

export default ItemDetailContainer;