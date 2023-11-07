import React, { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { MessageContext } from "./App";

export function BComp() {
  // 3. context 사용하기 : useContext(Context)
  const value = useContext(MessageContext);

  return <Text>{value.message}</Text>;
}
