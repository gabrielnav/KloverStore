//import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
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
        <ItemList products={products} />
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
          <ItemList products={filterCategory} />
        ) : (
          <ItemList products={products} />
        )}
      </>
    );
  }
};

export default ItemListContainer;