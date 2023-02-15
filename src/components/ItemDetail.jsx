import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";
  import prenda2 from "../assets/Mujer2.jpg";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  
  const ItemDetail = ({ prendas }) => {
    const { id } = useParams();
  
    const prendaFilter = prendas.filter((prenda) => prenda.id == id);
    return (
      <>
        {prendaFilter.map((prenda) => (
          <div key={prenda.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src={prenda2} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{prenda.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Description: {prenda.description}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Category: {prenda.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {prenda.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Price: U$D {prenda.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount stock={prenda.stock} />
                  <Center className="btn-center">
                    <Button variant="solid" colorScheme="blue">
                      Buy
                    </Button>
                  </Center>
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;