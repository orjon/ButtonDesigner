import { SET_HEIGHT, SET_WIDTH, SET_BORDERRADIUS, SET_TEXTSIZE } from './types';

export const setHeight = (height) => async (dispatch) => {
  dispatch({
    type: SET_HEIGHT,
    payload: height,
  });
};

export const setWidth = (width) => async (dispatch) => {
  dispatch({
    type: SET_WIDTH,
    payload: width,
  });
};

export const setBorderRadius = (borderRadius) => async (dispatch) => {
  dispatch({
    type: SET_BORDERRADIUS,
    payload: borderRadius,
  });
};

export const setTextSize = (textSize) => async (dispatch) => {
  dispatch({
    type: SET_TEXTSIZE,
    payload: textSize,
  });
};
