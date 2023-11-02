import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"blue"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"red"} borderTop={"2px dotted green"}>
        Hic, vitae.
      </Box>
      <Box bg={"green"} borderBottom={"7px double black"}>
        Pariatur, qui?
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.500"}>
        Ratione, tenetur?
      </Box>
      <Box borderY={"10px dotted"} borderColor={"pink.300"}>
        Molestiae, voluptatum.
      </Box>
      <Box border={"5px solid blue"} borderRadius={"30px"}>
        Explicabo, labore?
      </Box>
      <Box border={"5px solid yellow"} borderRadius={"20%"}>
        Nulla, sapiente.
      </Box>
      <Box border={"5px solid black"} borderRadius={10}>
        Architecto, dolorem?
      </Box>
      <Box border={"5px solid blue"} borderTopRightRadius={10}>
        Cumque, ratione.
      </Box>
      <Box border={"5px solid purple"} borderTopLeftRadius={10}>
        Reprehenderit, sapiente!
      </Box>
      <Box border={"5px solid yellow"} borderBottomRightRadius={10}>
        Labore, necessitatibus.
      </Box>
      <Box border={"5px solid green"} borderBottomLeftRadius={10}>
        Odit, quibusdam.
      </Box>
      <Box shadow={"10px 5px 5px blue"}>Harum, vel?</Box>
      <Box shadow={"10px 5px 5px red"}>Consequuntur, rerum.</Box>
      <Box shadow="lg">Ipsam, voluptas!</Box>
      <Box shadow="xl">Eaque, enim.</Box>
      <Box shadow="md">Ipsa, similique.</Box>
      <Box bg={"blue.300"} m={"10px"}>
        Necessitatibus, quibusdam.
      </Box>
      <Box bg={"yellow.600"} m={"20px"}>
        Adipisci, fuga.
      </Box>
      <Box bg={"facebook.500"} mx={"10px"}>
        Dolorem, iusto!
      </Box>
      <Box bg={"red.600"} my={"50px"}>
        Dolorem, iusto!
      </Box>
      <Box bg="red.600" m="1">
        Lorem ipsum dolor.
      </Box>
      <Box bg="green" m="2">
        Ducimus, molestias, quo.
      </Box>
      <Box bg="blue" m="3">
        Beatae, delectus, enim.
      </Box>
      <Box bg="yellow" m="4">
        Minima omnis, quos.
      </Box>
      <Box bg="gray" m="5">
        Consectetur, doloremque temporibus?
      </Box>
      <Box bg="red" p={"20px"}>
        Lorem ipsum.
      </Box>
      <Box bg="blue" px={"20px"}>
        Alias, amet?
      </Box>
      <Box bg="green" py={"20px"}>
        Ab, quis!
      </Box>
      <Box bg="yellow" pl={"20px"}>
        Esse, quaerat!
      </Box>
      <Box bg="gray" pr={"20px"}>
        Magnam, unde.
      </Box>
      <Box bg="purple">Rerum, veritatis?</Box>
      <Box bg="skyblue">Autem, eum!</Box>
      <Box bg="magenta">Accusantium, distinctio!</Box>
      <Box bg="gold">Consequatur, qui!</Box>
      <Box bg="tomato">Nemo, officiis!</Box>
    </>
  );
}

export default App;
