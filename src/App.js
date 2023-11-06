import React from "react";
import { List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["피자", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["김승대", "고영준", "제카"];

  const listItems = arr.map((item) => <ListItem>{item}</ListItem>);
  // const listPh = arr2.map((ph) => <ListItem>{ph}</ListItem>);
  // 이 위의 코드를 아래에 바로 써도 됨
  const arr3 = ["라떼", "모카", "카푸치노"];
  return (
    <div>
      <List>{listItems}</List>
      <hr />
      <List>
        {arr2.map((ph) => (
          <ListItem>{ph}</ListItem>
        ))}
      </List>
      <hr />
      <List>
        {arr3.map((cafe) => (
          <ListItem>{cafe}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
