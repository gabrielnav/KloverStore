//import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
// console.log(category);
  const [products, setProducts] = useState([]);
  //console.log(prenda);
 
/*useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setPrendas(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemssCollection).then((querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(items);
    });
  }, []);*/

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

  /*const catFilter = items.filter((item) => item.category === category);
  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Items by Category
        </Heading>
      </Center>
      {category ? <ItemList items={filterCategory} /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;*/