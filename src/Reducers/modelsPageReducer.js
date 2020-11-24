import { carsAPI } from "../api/api";

const GET_MODELS = 'GET_MODELS'

let initialState = {
  models: [],
};

const modelsPageReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_MODELS: {
          return {
              ...state,
              models: action.data
          }
      }
    default:
      return state;
  }
};

export const getModelsThunk = (brand) => {          
  return async (dispatch) => {
    let data = await carsAPI.getModels(brand);
    dispatch(getModelsAC(data))
  };
};

let getModelsAC = (data) => { 
    return {
        type: GET_MODELS,
        data
    }
}

export default modelsPageReducer;
