import { Heading, Center, Box, Image } from "@chakra-ui/react";


const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
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