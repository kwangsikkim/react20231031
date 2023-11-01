import { MyElem, city } from "./components/MyElem";
import { country, person } from "./components/MyBox";

import abc from "./components/MyElem";
import MyBBBBBBBBox from "./components/MyBox";
// default export는 1개기 때문에 아무이름이나 써도 사용 가능

function App() {
  return (
    <>
      <MyElem />
      <p>
        {city}, {abc}
      </p>
      <MyBBBBBBBBox />
      <p>
        {country}, {person.age}, {person.name}
      </p>
    </>
  );
}

export default App;
