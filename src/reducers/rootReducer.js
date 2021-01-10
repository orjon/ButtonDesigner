import { combineReducers } from 'redux';
import buttonStyle from './buttonStyle';
import buttonStyleHover from './buttonStyleHover';
import buttonProperties from './buttonProperties';

export default combineReducers({
  buttonStyle,
  buttonStyleHover,
  buttonProperties,
});
