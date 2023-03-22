import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';
import {compose} from 'redux';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;