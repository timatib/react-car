import { Route } from "react-router-dom";
import Models from "./components/Models/Models";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/common/NavBar/NavBar";
import style from "./App.module.css";
import Car from "./components/Car/Car";
import Footer from "./components/common/Footer/Footer";
import BreadcrumbsContainer from "./components/common/Breadcrumbs/BreadcrumbsContainer";
import LeftMenuFilterContainer from "./components/common/LeftMenuFilter/LeftMenuFilterContainer";

const App = (props) => {

  return (
    <div className={style.mainWrapper}>
      <LeftMenuFilterContainer />
      <div className={style.App}>
        <div className={style.wrapper}>
          <div className={style.navbarWrapper}>
            <NavBar />
          </div>
          <div>
            <div className={style.navigator}>
              <BreadcrumbsContainer />
            </div>
            <div>
              <Route path="/brand/:brand" exact component={() => <Models />} />
              <Route path="/brand/:brand/:carId" component={() => <Car />} />
              <Route path="/" exact component={() => <MainPage />} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      </div>
  );
};


export default App;
