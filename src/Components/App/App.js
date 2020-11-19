import { Route } from "react-router-dom";
import Auto from "../Auto/Auto";
import NavBar from "../NavBar/NavBar";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.App}>
      <div className={style.navbarWrapper}>
        <NavBar />
        <Route path="/auto" component={() => <Auto />} />
        <Route path="/images" component={() => `images` } />
      </div>
    </div>
  );
};

export default App;
