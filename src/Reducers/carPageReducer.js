import { carsAPI } from "../api/api";

const GET_BRANDS_MODEL_CAR = 'GET_BRANDS_MODEL_CAR'

let initialState = {
  modelCars: [],
};

const carPageReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_BRANDS_MODEL_CAR: {
          return{
              ...state,
              modelCars: action.modelCars
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

let getBrandsModelCarsAC = (modelCars) => { 
    return {
        type: GET_BRANDS_MODEL_CAR,
        modelCars
    }
    
}

export default carPageReducer;
