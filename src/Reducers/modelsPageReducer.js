import { carsAPI } from "../api/api";

const GET_MODELS = 'GET_MODELS'
const GET_BRANDS = 'GET_BRANDS'
const SET_MODEL_FOR_BREADCRUMBS = 'SET_MODEL_FOR_BREADCRUMBS'
const RESET_STATE = 'RESET_STATE';

let initialState = {
  models: [],
  brand: '',
  modelForBreadcrumbs: ''
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
        return {
          ...state,
          brand: action.brand
        }
      }
      case SET_MODEL_FOR_BREADCRUMBS: {
        return {
          ...state,
          modelForBreadcrumbs: action.model
        }
      }
      case RESET_STATE: {
        return initialState
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

export const setModelForBreadcrumbs = (model) => (dispatch) => {
  dispatch(setModelForBreadcrumbsAC(model));
}

export const resetStateData = () => ({type: RESET_STATE})

let setModelForBreadcrumbsAC = (model) => {
  return {
    type: SET_MODEL_FOR_BREADCRUMBS,
    model
  }
}



let getModelsAC = (data) => { 
    return {
        type: GET_MODELS,
        data
    }
}

export let getBrandsAC = (brand) => {
  return {
    type: GET_BRANDS,
    brand
  }
}

export default modelsPageReducer;
