import react from "react";
import style from "./NavBar.module.css";
import modelStyle from "../../Models/Models.module.css";
import Model from "../../Models/Model";
import Preloader from "../Preloader/Preloader";

const BlockResponseSearch = (props) => {


  const hideSearchPanel = () => {
    props.setEnteredText('')
    props.setInputValue(false)
  }
 

  return (
    <div>
      <div
        className={
          !props.inputValue
            ? style.navSearch
            : `${style.navSearch} ${style.active}`
        }
        ref={props.myRef}
        onClick={props.handleClickInside}
      >
        {props.isDataLoading ? (
          <div>
            {" "}
            <Preloader />{" "}
          </div>
        ) : (
          <div>
            {props.inputValue && (
              <div className={style.searchContent}>
                {!props.result.length == 0 ? (
                  <div className={modelStyle.brandModelWrapper} onClick={hideSearchPanel}>
                    {props.result.map((data, key) => {
                      return <Model key={key} data={data} />;
                    })}
                  </div>
                ) : (
                  <div className={style.notFound}>
                    <span>Ничего не найдено</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlockResponseSearch;
