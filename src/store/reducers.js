import { combineReducers } from 'redux';
import { LoginReducer as login } from '../routes/Login/modules/login';
import { HomeReducer as home } from '../routes/Home/modules/home';

export const makeRootReducer = () => {
  return combineReducers({
    login,
    home
  });
}

export default makeRootReducer;
