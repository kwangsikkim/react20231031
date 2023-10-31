function App() {
  const myStyle = {
    color: "blue",
    backgroundColor: "gold", // lowerCamelCase로 변경
    fontSize: "70px",
    textAlign: "center",
  }; // js object

  return (
    <>
      {/* style 속성은 객체로 주어야 함 */}
      <div style={myStyle}>Lorem ipsum dolor.</div>
      <hr />
      <div
        style={{
          color: "red",
          backgroundColor: "yellow", // lowerCamelCase로 변경
          fontSize: "70px",
          textAlign: "center",
        }} // 바깥 중괄호는 js코드 쓰려고, 안쪽 중괄호는 js객체를 쓰려고 사용
      >
        Lorem ipsum dolor.
      </div>
    </>
  );
}

export default App;
