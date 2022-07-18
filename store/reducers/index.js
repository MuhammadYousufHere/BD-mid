import { combineReducers } from 'redux';
import product from '../reducers/product';
import cart from './cart';
import alert from './alert';
import message from './message'
import notification from './notifications';

export default combineReducers({
  alert,
  product,
  cart,
  message,
  notification
});
