 import React from "react";
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
} from "@chakra-ui/react";

const ItemList = ({ products }) => {
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