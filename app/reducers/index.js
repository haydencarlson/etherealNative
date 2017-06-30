import { combineReducers } from 'redux';
import * as loggedInUsers from './loggedInUser.js';
export default combineReducers(Object.assign(
  loggedInUsers,
));
