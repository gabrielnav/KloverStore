import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import prenda3 from "../assets/page1.jpg"
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="Teal" color="#262626">
        <Flex alignItems="center" gap="2">
          <Avatar
            size="xl"
            src={prenda3}
          />
          <Box p="10" w="300px" h="100">
            <Heading size="md">
              <Link to={"/"}>KloverStore</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme='whiteAlpha'
                  m="5"
                >
                  Catálogo
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme='whiteAlpha'
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categorias
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Invierno"}`}>
                  <MenuItem>Invierno</MenuItem>
                </Link>
                <Link to={`/category/${"Primavera"}`}>
                  <MenuItem>Primavera</MenuItem>
                </Link>
                <Link to={`/category/${"Verano"}`}>
                  <MenuItem>Verano</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;