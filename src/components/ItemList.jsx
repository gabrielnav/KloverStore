 /*import React from "react";
import { Link } from "react-router-dom";
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
  Button,
} from "@chakra-ui/react";*/
import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { Link } from "react-router-dom";
import ItemQuantitySelector from "./ItemQuantitySelector";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Center,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";

const ItemList = ({ products }) => {
  const { counter, setCounter, cart, setCart, cartItems } =
  useContext(CounterContext);
  return (
    <div className="f-wrap">
      {products.map((product) => (
        <Card maxW="sm" key={product.id} m={5}>
          <CardBody>
            <Image
              src={product.image}
              alt={`Imagen de la prenda ${product.name} `}
              borderRadius="lg"
              className="itemImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.name}</Heading>
              <p className="textCardItem">{product.category}</p>
              <Text className="textCardItem">{product.description}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Flex w="100%" spacing={4} direction="row" align="center">
              <Spacer />
              <ButtonGroup spacing="2">
                {product.stock === 0 ? (
                  <Button as={Button} colorScheme="red" size="md" mx="2">
                    Sin Stock
                  </Button>
                ) : (
                  <Link to={`/item/${product.id}`}>
                     <CardFooter>
            <ButtonGroup spacing="12">
              <ItemQuantitySelector stock={product.stock} />
              <Button
                onClick={() => {
                  setCart(cart + counter);
                  setCounter(0);
                  if (counter != 0) {
                    cartItems.push([product.name, product.price, counter]);
                  } else {
                    alert("Debe indicar la cantidad");
                  }
                }}
                colorScheme="teal"
              >
                Agregar al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
                    <Button as={Button} colorScheme="teal" size="md" mx="2">
                      Pedir
                    </Button>
                  </Link>
                )}
              </ButtonGroup>
              <Spacer />
            </Flex>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ItemList;