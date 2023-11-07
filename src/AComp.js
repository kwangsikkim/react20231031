import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { MessageContext } from "./App";

export function AComp() {
  // 3. context 사용하기 : useContext(Context)
  const value = useContext(MessageContext);

  return (
    <Button onClick={() => value.setMessage("변경된 메시지")}>
      메시지 변경하기
    </Button>
  );
}
