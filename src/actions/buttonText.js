import { SET_TEXT } from './types';

export const setText = (value) => async (dispatch) => {
  dispatch({
    type: SET_TEXT,
    payload: value,
  });
};
