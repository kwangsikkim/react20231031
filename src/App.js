import React from "react";
import { Box, Button, Center } from "@chakra-ui/react";

function App(props) {
  function handleClick(e) {
    // event bubbling을 막는 메소드
    e.stopPropagation();
    console.log(e.target.className);
  }

  return (
    <Center
      onClick={handleClick}
      className="outeerBox"
      w={"200px"}
      h={"200px"}
      bg={"gold"}
    >
      <Center
        onClick={handleClick}
        className="InnerBox"
        w={"100px"}
        h={"100px"}
        bg={"blue"}
      >
        <Button onClick={handleClick} className="button" colorScheme="yellow">
          Button
        </Button>
      </Center>
    </Center>
  );
}

export default App;
