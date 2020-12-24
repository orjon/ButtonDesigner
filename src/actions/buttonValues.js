import {
  SET_HEIGHT,
  SET_WIDTH,
  SET_BORDERRADIUS,
  SET_BORDERRADIUS_TOPLEFT,
  SET_BORDERRADIUS_TOPRIGHT,
  SET_BORDERRADIUS_BOTTOMRIGHT,
  SET_BORDERRADIUS_BOTTOMLEFT,
  SET_TEXTSIZE,
} from './types';

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

export const setBorderRadiusTopLeft = (borderRadius) => async (dispatch) => {
  dispatch({
    type: SET_BORDERRADIUS_TOPLEFT,
    payload: borderRadius,
  });
};

export const setBorderRadiusTopRight = (borderRadius) => async (dispatch) => {
  dispatch({
    type: SET_BORDERRADIUS_TOPRIGHT,
    payload: borderRadius,
  });
};

export const setBorderRadiusBottomRight = (borderRadius) => async (
  dispatch
) => {
  dispatch({
    type: SET_BORDERRADIUS_BOTTOMRIGHT,
    payload: borderRadius,
  });
};

export const setBorderRadiusBottomLeft = (borderRadius) => async (dispatch) => {
  dispatch({
    type: SET_BORDERRADIUS_BOTTOMLEFT,
    payload: borderRadius,
  });
};
export const setTextSize = (textSize) => async (dispatch) => {
  dispatch({
    type: SET_TEXTSIZE,
    payload: textSize,
  });
};
