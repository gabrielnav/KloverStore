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