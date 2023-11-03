import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  let [number, setNumber] = useState(0);

  // let number = 0;

  function handleClick() {
    // number++; 동작하지 않음
    setNumber(number + 1);
    console.log(number);
  }
  return (
    <div>
      <Button onClick={handleClick}>바꾸기</Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;
