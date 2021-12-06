import { FunctionalComponent, h } from "preact";
import style from "./style.css";

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <div class={style.box}></div>
    </div>
  );
};

export default Home;
