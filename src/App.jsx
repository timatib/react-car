import { Route } from "react-router-dom";
import Models from "./Components/Models/Models";
import MainPage from "./Components/MainPage/MainPage";
import NavBar from "./Components/common/NavBar/NavBar";
import style from "./App.module.css";
import Car from './Components/Car/Car';
import Footer from './Components/common/Footer/Footer';

const App = () => {
  return (
    <div className={style.App}>
      <div className={style.wrapper}>
        <div className={style.navbarWrapper}>
          <NavBar />
        </div>
        <div>
          <Route path="/" exact component={() => <MainPage />} />
          <Route path="/models" component={() => <Models />} />
          <Route path="/car" exact component={() => <Car />} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
