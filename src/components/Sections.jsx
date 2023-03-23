import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Sections = () => {
  return (
    <>
      <ul className="flex">
        <Flex>
          <Menu>
            <Link to={"/catalogue"}>
              <MenuButton as={Button} colorScheme="gray" size="md" mx="2">
                Catálogo
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="gray"
              size="md"
              mx="2"
              rightIcon={<ChevronDownIcon />}
            >
             Temporadas
            </MenuButton>
            <MenuList>
              <Link to={`/category/${"Invierno"}`}>
                <MenuItem>Invierno</MenuItem>
              </Link>
              <Link to={`/category/${"Verano"}`}>
                <MenuItem>Verano</MenuItem>
              </Link>
              <Link to={`/category/${"Primavera"}`}>
                <MenuItem>Primavera</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </ul>
    </>
  );
};

export default Sections;