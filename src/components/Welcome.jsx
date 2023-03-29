import { Heading, Center, Box, Image } from "@chakra-ui/react";


const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
        <Heading mb="6">BIENVENIDOS A KLOVERSTORE</Heading>
          <Image
            src="https://i.postimg.cc/JnYbP6JQ/Local2.jpg"
            alt="prenda"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;