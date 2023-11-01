// export 된 컴포넌트(변수, 함수, 객체 등 모두)를 사용하려면 import 해야 함
import { MyElem } from "./components/MyElem.js";
import { MyComp } from "./components/MyComp";
import { MyHeader } from "./components/MyHeader";

function App() {
  return (
    <>
      <MyHeader />
      <MyComp />
      <MyElem />
    </>
  );
}

export default App;
