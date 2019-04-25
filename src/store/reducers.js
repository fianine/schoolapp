import { combineReducers } from 'redux';
import { LoginReducer as login } from '../routes/Login/modules/login';
import { HomeReducer as home } from '../routes/Home/modules/home';
import { MessageReducer as message } from '../routes/Message/modules/message';
import { PartnershipReducer as partnership } from '../routes/Partnership/modules/partnership';
import { CalendarReducer as calendar } from '../routes/Calendar/modules/calendar';
import { PhotovideoReducer as photovideo } from '../routes/Photovideo/modules/photovideo';

export const makeRootReducer = () => {
  return combineReducers({
    login,
    home,
    message,
    partnership,
    calendar,
    photovideo
  });
}

export default makeRootReducer;
