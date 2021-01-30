import { NavBarAPI } from "../api/api";

const SET_RESULT = "SET_RESULT";
const SET_INPUT_VALUE = 'SET_INPUT_VALUE'
const RESET_STATE = 'RESET_STATE'
const SET_IS_MENU_LEFT = 'SET_IS_MENU_LEFT'


let initialState = {
  searchQuery: "",
  result: [],
  inputValue: false,
  isMenuLeft: false
};

const navReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT: {
      return {
        ...state,
        result: action.result,
      };
    }
    case SET_INPUT_VALUE: {
      return{
        ...state,
        inputValue: action.inputValue
      }
    }
    case SET_IS_MENU_LEFT: {
      return{
        ...state,
        isMenuLeft: action.isMenuLeft
      }
    }

    default:
      return state;
  }
};

export const getSearchQueryThunk = (searchQuery) => {
  return async (dispatch) => {
    let data = await NavBarAPI.getSearchQuery(searchQuery);
    dispatch(setResult(data.data));
  };
};

let setResult = (result) => {
  return {
    type: SET_RESULT,
    result,
  };
};

export let setInputValueAC = (inputValue) => {
  return{
    type: SET_INPUT_VALUE,
    inputValue
}
}

export const resetStateData = () => ({type: RESET_STATE})

export let setIsMenuLeftAC = (isMenuLeft) => {
  return{
    type: SET_IS_MENU_LEFT,
    isMenuLeft
  }
}

export default navReduser;
