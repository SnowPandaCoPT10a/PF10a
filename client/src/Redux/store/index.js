import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';
import {compose} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";


 const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk)),
);

export default store;