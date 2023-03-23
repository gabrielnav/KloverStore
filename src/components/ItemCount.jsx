/*import { useContext, useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ stock,  id, price, name  }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, price, name }];
      }
    });
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={substractQty} />
        )}
         <Center>
          <Button
            onClick={() => addToCart()}
            variant="solid"
            colorScheme="blue"
          >
            Add to cart: {count}
          </Button>
        </Center>
        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={addQty} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;*/

import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { Stack, Button } from "@chakra-ui/react";

const ItemCount = ({ stock }) => {
  const { counter, setCounter } = useContext(CounterContext);

  const suma = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const resta = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        {counter === 0 ? (
          <Button onClick={resta} variant="ghost" colorScheme="teal" size="md">
            -
          </Button>
        ) : (
          <Button onClick={resta} colorScheme="teal" size="md">
            -
          </Button>
        )}
        <h2>{counter}</h2>
        {counter === stock ? (
          <Button onClick={suma} variant="ghost" colorScheme="teal" size="md">
            +
          </Button>
        ) : (
          <Button onClick={suma} colorScheme="teal" size="md">
            +
          </Button>
        )}
      </Stack>
    </>
  );
};

export default ItemCount;