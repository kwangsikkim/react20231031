function MyComp2() {
  let name = "손흥민";
  let age = 33;

  // {} : jsx에서 js 코드 작성하기 위한 기로
  return (
    <>
      <h1>hello react</h1>
      <h1>hello {name}</h1>
      <h1>{age} years</h1>
      <h1>{age * 2} double years</h1>
      <h1>{name + "선수"}</h1>
      {/*  그래서 주석이 이렇게 생김 */}
    </>
  );
}

function App() {
  // jsx에서 태그 사용시 꼭 종료 태그를 작성해야 함!!
  // 빈 요소이면 시작 태그에서 종료!
  return (
    <div>
      <h1>hello react</h1>
      <h2>Hi REACT</h2>
      <p>
        Lorem ipsum dolor.
        <br /> Lorem ipsum dolor.
      </p>
      <MyComp />
      <MyComp2 />
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
  );
}

export default App;
