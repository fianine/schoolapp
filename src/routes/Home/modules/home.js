import update from 'react-addons-update';
import constants from './actionConstants';
import { Dimensions } from 'react-native';

// Constants
const {
  GET_HOME_USER
} = constants;

const ACTION_HANDLERS = {};

const initialState = {};

export function HomeReducer (state = initialState, action){
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
