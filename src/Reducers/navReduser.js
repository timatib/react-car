import { NavBarAPI } from "../api/api";

const SET_RESULT = "SET_RESULT";

let initialState = {
  searchQuery: "",
  result: [],
};

const navReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT: {
      return {
        ...state,
        result: action.result,
      };
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

export default navReduser;
