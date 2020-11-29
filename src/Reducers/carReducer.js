import { carsAPI } from "../api/api";

const SET_DESCRIPTION_MODEL = 'SET_DESCRIPTION_MODEL'
const SET_NAME_DISCRIPTION_MODEL = 'SET_NAME_DISCRIPTION_MODEL'

let initialState = {
    modelDescription: [],
    bodyTitle: ''
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
          bodyTitle: action.bodyTitle
        }
      }
    default:
      return state;
  }
};

//Get description car
export const getModelDescriptionThunk = (brand, carId) => {          
  return async (dispatch) => {
    let data = await carsAPI.getDescription(brand, carId);
    dispatch(setModelDescriptionAC(data))
  };
};

let setModelDescriptionAC = (modelDescription) => { 
    return {
        type: SET_DESCRIPTION_MODEL,
        modelDescription
    }
    
}

export let setNameDiscriptionModelAC = (bodyTitle) => {
  return{
    type: SET_NAME_DISCRIPTION_MODEL,
    bodyTitle
  }
}

export default carReducer;
