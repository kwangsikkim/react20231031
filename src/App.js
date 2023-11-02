import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  /*
   base: "0em", // 0px
   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
   md: "48em", // ~768px
   lg: "62em", // ~992px
   xl: "80em", // ~1280px
   "2xl": "96em", // ~1536px
  */
  return (
    <>
      <SimpleGrid spacing={"10px"} columns={{ base: 2, md: 3, "2xl": 6 }}>
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Repellat!</Box>
        <Box bg="blue.300">Nesciunt?</Box>
        <Box bg="blue.300">Reiciendis.</Box>
        <Box bg="blue.300">Odio!</Box>
        <Box bg="blue.300">Delectus.</Box>
        <Box bg="blue.300">Accusantium.</Box>
        <Box bg="blue.300">Labore!</Box>
        <Box bg="blue.300">Laborum!</Box>
        <Box bg="blue.300">Numquam.</Box>
        <Box bg="blue.300">Iure?</Box>
        <Box bg="blue.300">Nemo!</Box>
        <Box bg="blue.300">Doloremque.</Box>
        <Box bg="blue.300">Deserunt!</Box>
        <Box bg="blue.300">Dolore.</Box>
        <Box bg="blue.300">Mollitia.</Box>
        <Box bg="blue.300">Quam.</Box>
        <Box bg="blue.300">Impedit.</Box>
        <Box bg="blue.300">Possimus.</Box>
        <Box bg="blue.300">Minus!</Box>
        <Box bg="blue.300">Quas?</Box>
        <Box bg="blue.300">Sunt!</Box>
        <Box bg="blue.300">Ipsa.</Box>
        <Box bg="blue.300">Consequatur.</Box>
        <Box bg="blue.300">Illo?</Box>
        <Box bg="blue.300">Accusantium.</Box>
        <Box bg="blue.300">Odit.</Box>
        <Box bg="blue.300">Veritatis?</Box>
        <Box bg="blue.300">Est.</Box>
        <Box bg="blue.300">Voluptatem!</Box>
      </SimpleGrid>
    </>
  );
}

export default App;
