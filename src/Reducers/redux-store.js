import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import brandReducer from './brandReducer'
import modelsPageReducer from './modelsPageReducer';
import carReducer from './carReducer';

let reducers = combineReducers({
   brandPage: brandReducer,
   modelsPage: modelsPageReducer,
   descriptionPage: carReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

window._store_=store

export default store;