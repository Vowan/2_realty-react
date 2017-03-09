import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';
//import * as types from '../actions/types';


const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    routing
});

export default rootReducer;

