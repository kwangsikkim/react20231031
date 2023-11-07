import React, { createContext, useState } from "react";
import { AComp } from "./AComp";
import { BComp } from "./BComp";

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
export const MessageContext = createContext(null);

export default App;
