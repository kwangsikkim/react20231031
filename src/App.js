
function App() {
  return (
    <div>
        <h1>hello react</h1>
        <h2>Hi REACT</h2>
        <MyComp />
    </div>
  );
}

// built-in component(브라우저 제공 태그)는 소문자로 시작
// component 명은 대문자로 시작
// component 는 return값을 가져야함
// return 값은 보통 JSX 코드


function MyComp() {
    // return 에 jsx 코드 작성 가능
    // 꼭 하나의 root 태그가 존재해야 함
    // return 값이 여러 줄이면 ()로 감싸기
    // root 태그가 필요 없다면, fragment(태그 명이 없는 태그) 사용 가능

    // jsx에서 주석 사용법
    // {/*   */}
    return (
        <>
            {/* fragment 는 <>  </> */}
            <h1>HI COMPONENT</h1>
            <h2>hello</h2>
        </>
    )
}

export default App;
