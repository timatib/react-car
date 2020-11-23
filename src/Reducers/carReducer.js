import { carsAPI } from "../api/api";

const GET_DESCRIPTION_MODEL = 'GET_BRANDS_MODEL_CAR'

let initialState = {
    modelDescription: [],
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_DESCRIPTION_MODEL: {
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
export const getModelDescriptionThunk = () => {          
  return async (dispatch) => {
    let data = await carsAPI.getDescription();
    dispatch(getModelDescriptionAC(data))
  };
};

let getModelDescriptionAC = (modelDescription) => { 
    return {
        type: GET_DESCRIPTION_MODEL,
        modelDescription
    }
    
}

export default carReducer;
