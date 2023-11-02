import { Box, FormControl, Select } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box w="480px">
        <FormControl>
          <Select placeholder="선택하세요" multiple h={"120px"}>
            <option value="value1">Lorem.</option>
            <option value="value2">Accusamus.</option>
            <option value="value3">Reiciendis.</option>
            <option value="value4">Non?</option>
            <option value="value5">Fugit.</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
