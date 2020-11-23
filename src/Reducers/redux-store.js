import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import carPageReducer from './carPageReducer'
import modelsPageReducer from './modelsPageReducer';

let reducers = combineReducers({
   carPage: carPageReducer,
   modelsPage: modelsPageReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

window._store_=store

export default store;