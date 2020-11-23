import { carsAPI } from "../api/api";

const GET_BRANDS_MODEL_CAR = 'GET_BRANDS_MODEL_CAR'

let initialState = {
  brands: [],
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_BRANDS_MODEL_CAR: {
          return{
              ...state,
              brands: action.brands
          }
      }
    default:
      return state;
  }
};

//Get car brands
export const getBrandsModelCarsThunk = () => {          
  return async (dispatch) => {
    let data = await carsAPI.getBrands();
    dispatch(getBrandsModelCarsAC(data))
  };
};

let getBrandsModelCarsAC = (brands) => { 
    return {
        type: GET_BRANDS_MODEL_CAR,
        brands
    }
    
}

export default brandReducer;
