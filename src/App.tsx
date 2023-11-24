import { Button, Box, Heading, Flex, Image} from "@chakra-ui/react";
export default function App() {
  return (
    <Box p="4" className="principal-box">
      <Heading size="lg">Benjamin Matteo</Heading>
      <Box display={{ base: "flex" }}>
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </Box>
      <Box boxSize="sm">
        <Image src="./assets/images/foto-provisoria.jpg" alt="Dan Abramov" />
      </Box>
    </Box>
  );
}
