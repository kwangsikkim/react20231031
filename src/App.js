import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  function handleButton1() {
    console.log("버튼1 클릭");
  }
  function handleButton2() {
    console.log("버튼2 클릭");
  }

  function handleButtonClick(number) {
    console.log("버튼" + number + " 클릭");
  }
  return (
    <div>
      <Button onClick={handleButton1}>버튼1</Button>
      <Button onClick={handleButton2}>버튼2</Button>
      <Button onClick={() => handleButtonClick(3)}>버튼3</Button>
      <Button onClick={() => handleButtonClick(4)}>버튼4</Button>
    </div>
  );
}

export default App;
