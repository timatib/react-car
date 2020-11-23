import { Route } from "react-router-dom";
import Models from "./components/Models/Models";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/common/NavBar/NavBar";
import style from "./App.module.css";
import Car from './components/Car/Car';
import Footer from './components/common/Footer/Footer';

const App = () => {
  return (
    <div className={style.App}>
      <div className={style.wrapper}>
        <div className={style.navbarWrapper}>
          <NavBar />
        </div>
        <div>
          <Route path="/" exact component={() => <MainPage />} />
          <Route path="/brand/:brand?" component={() => <Models />} />
          <Route path="/car/:carId?"  component={() => <Car />} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
