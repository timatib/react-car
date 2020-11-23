import { carsAPI } from "../api/api";

const SET_DESCRIPTION_MODEL = 'SET_DESCRIPTION_MODEL'

let initialState = {
    modelDescription: [],
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_DESCRIPTION_MODEL: {
          return{
              ...state,
              modelDescription: action.modelDescription
          }
      }
    default:
      return state;
  }
};

//Get description car
export const getModelDescriptionThunk = (carId = 2) => {          
  return async (dispatch) => {
    let data = await carsAPI.getDescription(carId);
    dispatch(setModelDescriptionAC(data))
  };
};

let setModelDescriptionAC = (modelDescription) => { 
    return {
        type: SET_DESCRIPTION_MODEL,
        modelDescription
    }
    
}

export default carReducer;
