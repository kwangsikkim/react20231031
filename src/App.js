import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Center w={"480px"}>
        <Box>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
            <FormHelperText>필수 입력사항입니다.</FormHelperText>
          </FormControl>
        </Box>
      </Center>
      <Center mt={5}>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>하나만 선택하세요</FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value="value1">Lorem.</Radio>
                <Radio value="value2">Sed.</Radio>
                <Radio value="value3">Ratione.</Radio>
                <Radio value="value4">Qui.</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>
      <Center>
        <Box w="480px">
          <FormControl>
            <CheckboxGroup>
              <Flex gap={5}>
                <Checkbox colorScheme="orange">Lorem.</Checkbox>
                <Checkbox colorScheme="green">Corporis!</Checkbox>
                <Checkbox colorScheme="red">Saepe?</Checkbox>
                <Checkbox colorScheme="blue">Soluta.</Checkbox>
              </Flex>
            </CheckboxGroup>
          </FormControl>
        </Box>
      </Center>
    </div>
  );
}

export default App;
