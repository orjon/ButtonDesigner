import { SET_TEXT, SET_SELECTOR } from './types';

export const setText = (value) => async (dispatch) => {
  dispatch({
    type: SET_TEXT,
    payload: value,
  });
};

export const setSelector = (value) => async (dispatch) => {
  dispatch({
    type: SET_SELECTOR,
    payload: value,
  });
};
