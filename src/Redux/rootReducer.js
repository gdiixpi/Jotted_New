import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userDataReducer from './userData/userData.reducer';
import treeDataReducer from './newTreeData/newTree.reducer';
// import appReducer from './appReducer';

const reducers = combineReducers({
	// appData: appReducer,
	userData: userDataReducer,
	treeData: treeDataReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
