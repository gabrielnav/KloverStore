import { Heading, Center, Box, Image } from "@chakra-ui/react";
import prenda2 from "../assets/Local2.jpg"

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src={prenda2}
            alt="prenda"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;