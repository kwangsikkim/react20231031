import style from "../style/myStyle.module.css";

export function MyText() {
  return (
    <div>
      <h1 className={`${style.error} ${style.special} ${style.coffee}`}>
        Lorem ipsum dolor sit amet.1
      </h1>
      <h1 className={[style.error, style.special, style.coffee].join(" ")}>
        Lorem ipsum dolor sit amet.2

      </h1>
    </div>
  );
}
