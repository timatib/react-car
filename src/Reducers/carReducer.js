import { carsAPI } from "../api/api";

const SET_DESCRIPTION_MODEL = 'SET_DESCRIPTION_MODEL'
const SET_NAME_DISCRIPTION_MODEL = 'SET_NAME_DISCRIPTION_MODEL'

let initialState = {
    modelDescription: [],
    bodyTittle: ''
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_DESCRIPTION_MODEL: {
          return{
              ...state,
              modelDescription: action.modelDescription
          }
      }
      case SET_NAME_DISCRIPTION_MODEL: {
        return{
          ...state,
          bodyTittle: action.bodyTittle
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

export let setNameDiscriptionModelAC = (bodyTittle) => {
  return{
    type: SET_NAME_DISCRIPTION_MODEL,
    bodyTittle
  }
}

export default carReducer;
