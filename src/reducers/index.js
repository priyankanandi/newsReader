import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import search from './search';

export default combineReducers({
    newsReducer: newsReducer,
    search: search,
})