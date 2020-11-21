import { Route } from "react-router-dom";
import BrandModel from "../BrandModels/BrandModel";
import Cars from "../Cars/Cars";
import ContentMainPage from "../ContentMainPage/ContentMainPage";
import FeatureModel from "../FeatureModel/FeatureModel";
import MainPage from "../MainPage/MainPage";
import NavBar from "../NavBar/NavBar";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.App}>
      <div className={style.wrapper}>
        <div className={style.navbarWrapper}>
          <NavBar />
        </div>
        <div>
        <Route path="/brand-model/" component={() => <BrandModel />} />
        <Route path="/" exact component={() => <MainPage />} />
        <Route path="/feature-model/" exact component={() => <FeatureModel />} />
        </div>
      </div>
      <footer className={style.footer}>
          Footer
      </footer>
    </div>
  );
};

export default App;
