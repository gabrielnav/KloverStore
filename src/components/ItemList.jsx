import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ prendas }) => {
  return (
    <>
    <Container maxW="container.sm" className="main-catalogue">
          {prendas?.map((prenda) => (
            <Item
              key={prenda.id}
              id={prenda.id}
              name={prenda.name}
              description={prenda.description}
              price={prenda.price}
              stock={prenda.stock}
              category={prenda.category}
              />
              ))}
            </Container>
          </>
        );
      };
      
      export default ItemList;