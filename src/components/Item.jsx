import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemCount from "./ItemCount";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Spacer,
  Flex,
} from "@chakra-ui/react";

// Componente Description
const Item = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <>
      {products.map((item) => (
        <Card maxW="sm" key={item.id} m={5}>
          <CardBody>
            <Image
              src={item.image}
              alt={`Imagen de la prendas ${item.name} `}
              borderRadius="lg"
              className="itemImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.name}</Heading>
              <Text className="textCardItem">{item.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${item.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Flex w="100%" spacing={4} direction="row" align="center">
              <Spacer />
              <ButtonGroup spacing="2">
                <ItemCount />
              </ButtonGroup>
              <Spacer />
            </Flex>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Item;
