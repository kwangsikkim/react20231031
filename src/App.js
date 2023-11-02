import {
  Box,
  FormControl,
  FormLabel,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box w="480px">
        <FormControl display={"flex"} alignItems={"center"}>
          <FormLabel mb={0}>알림을 받으시겠습니까?</FormLabel>
          <Switch size={"lg"} colorScheme="red" />
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
