import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function AComp() {
  // 3. context 사용하기 : useContext(Context)
  const value = useContext(MessageContext);

  return (
    <Button onClick={() => value.setMessage("변경된 메시지")}>
      메시지 변경하기
    </Button>
  );
}

function BComp() {
  // 3. context 사용하기 : useContext(Context)
  const value = useContext(MessageContext);

  return <Text>{value.message}</Text>;
}

function App(props) {
  const [message, setMessage] = useState("초기 상태 메시지");

  return (
    <div>
      {/*2. context에 value 넣기 : Context.Provider value={value}><Context.Provider>*/}
      <MessageContext.Provider
        value={{ message: message, setMessage: setMessage }}
      >
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </div>
  );
}
// 1. context 만들기 :createContext(null)
const MessageContext = createContext(null);

export default App;
