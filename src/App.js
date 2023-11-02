import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"pink.100"}
        gap={3}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"green"}>Qui.</Box>
        <Box bg={"red"}>Exercitationem!</Box>
        <Box bg={"blue"}>Iure?</Box>
        <Box bg={"grey"}>Sint!</Box>
      </Flex>
    </>
  );
}

export default App;
