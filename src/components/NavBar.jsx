import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Sections from "./Sections";

import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container
} from "@chakra-ui/react";

const NavBar = () => {
  const { cart } = useContext(CounterContext);

  function VerificacionCart({ cantidadProductos }) {
    if (cantidadProductos > 0) {
      return (
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      );
    } else {
      return (
        <button
          onClick={() => alert("El carro debe tener al menos un producto.")}
        >
          <CartWidget />
        </button>
      );
    }
  }
      return (
        <>
          <Container maxW="100rem" bg="teal" color="#262626">
            <Flex>
              <Box p="2" color="white">
                <Heading>
                  <Link to={"/"}>KloverStore</Link>
                </Heading>
              </Box>
              <Spacer />
              <Sections />
              <Spacer />
              <Box p="2" color="white" className="flex">
                <Flex>
                  <VerificacionCart cantidadProductos={cart} />
                </Flex>
              </Box>
            </Flex>
          </Container>
        </>
      );

  };
    export default NavBar;