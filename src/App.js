import MyBox, { address } from "./components/MyBox";
import MyElem, { address as myAddress } from "./components/MyElem";
// as로 named export 값을 import할 때 별칭을 줄 수 있음.

function App() {
  return (
    <>
      <MyBox />
      <h1>{address}</h1>
      <MyElem />
      <h1>{myAddress}</h1>
    </>
  );
}

export default App;
