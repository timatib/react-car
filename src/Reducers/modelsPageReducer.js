import { carsAPI } from "../api/api";

const GET_MODELS = 'GET_MODELS'
const GET_BRANDS = 'GET_BRANDS'

let initialState = {
  models: [],
  brand: ''
};

const modelsPageReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_MODELS: {
          return {
              ...state,
              models: action.data
          }
      }
      case GET_BRANDS: {
        return{
          ...state,
          brand: action.brand
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

export let getBrandsAC = (brand) => {
  return{
    type: GET_BRANDS,
    brand
  }
}

export default modelsPageReducer;
