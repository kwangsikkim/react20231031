import React from "react";
import { List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["피자", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["김승대", "고영준", "제카"];
  const arr3 = ["라떼", "모카", "카푸치노"];

  const arr4 = [
    { id: 0, name: "라떼" },
    { id: 1, name: "모카" },
    { id: 2, name: "카푸치노" },
  ];
  // 배열을 jsx에서 사용하기, 리스트아이템에 매핑되는 컴포넌트는 key prop을 꼭 가질 것!
  // key prop은 유일한 값이어야 하며, 주로 db의 primary key가 사용될 것이다.

  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));
  // const listPh = arr2.map((ph) => <ListItem>{ph}</ListItem>);
  // 이 위의 코드를 아래에 바로 써도 됨

  return (
    <div>
      <List>{listItems}</List>
      <hr />
      <List>
        {arr2.map((ph, index) => (
          <ListItem key={index}>{ph}</ListItem>
        ))}
      </List>
      <hr />
      <List>
        {arr3.map((cafe, i) => (
          <ListItem key={i}>{cafe}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
