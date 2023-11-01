import myStyle from "../style/style2.module.css";

export function MyContainer() {
  return (
    <div>
      <h1 className={`${myStyle.boxClass} ${myStyle.error} ${myStyle.note}`}>
        Lorem ipsum dolor sit amet.1
      </h1>
      <h1 className={[myStyle.boxClass, myStyle.error, myStyle.note].join(" ")}>
        Lorem ipsum dolor sit amet.2
      </h1>
    </div>
  );
}
