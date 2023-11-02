import { Box, FormControl, FormLabel, Textarea } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box w="480px">
        <FormControl>
          <FormLabel>본문</FormLabel>
          <Textarea placeholder="본문을 작성하세요" h={"500px"}></Textarea>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
