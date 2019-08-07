import { combineReducers } from 'redux';
import postReducers from './postReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    posts: postReducers,
    users: usersReducer
})