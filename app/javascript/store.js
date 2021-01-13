import thunk from 'redux-thunk';
import combinedReducer from './redux/reducers';
import { createStore, applyMiddleware } from 'redux';

export default createStore(combinedReducer, applyMiddleware(thunk));
