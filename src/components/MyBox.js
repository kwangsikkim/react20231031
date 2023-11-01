import myCss from "../style/style1.module.css";

export function MyBox() {
  return (
    <div>
      <h1 className={myCss.boxClass}>Lorem ipsum dolor sit amet.</h1>
    </div>
  );
}
