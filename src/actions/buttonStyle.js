import {
  SET_HEIGHT,
  SET_WIDTH,
  SET_BACKGROUNDCOLOR,
  SET_COLOR,
  SET_BORDERSTYLE,
  SET_BORDERSTYLE_TOP,
  SET_BORDERSTYLE_RIGHT,
  SET_BORDERSTYLE_BOTTOM,
  SET_BORDERSTYLE_LEFT,
  SET_BORDERCOLOR,
  SET_BORDERCOLOR_TOP,
  SET_BORDERCOLOR_RIGHT,
  SET_BORDERCOLOR_BOTTOM,
  SET_BORDERCOLOR_LEFT,
  SET_BOXSHADOW,
  SET_TEXTSHADOW,
  SET_BORDERWIDTH,
  SET_BORDERWIDTH_TOP,
  SET_BORDERWIDTH_RIGHT,
  SET_BORDERWIDTH_BOTTOM,
  SET_BORDERWIDTH_LEFT,
  SET_BORDERRADIUS,
  SET_BORDERRADIUS_TOPLEFT,
  SET_BORDERRADIUS_TOPRIGHT,
  SET_BORDERRADIUS_BOTTOMRIGHT,
  SET_BORDERRADIUS_BOTTOMLEFT,
  SET_MARGIN,
  SET_MARGIN_TOP,
  SET_MARGIN_RIGHT,
  SET_MARGIN_BOTTOM,
  SET_MARGIN_LEFT,
  SET_PADDING,
  SET_PADDING_TOP,
  SET_PADDING_RIGHT,
  SET_PADDING_BOTTOM,
  SET_PADDING_LEFT,
  SET_FONTSIZE,
  SET_FONTFAMILY,
} from './types';

export const setHeight = (value) => async (dispatch) => {
  dispatch({
    type: SET_HEIGHT,
    payload: value,
  });
};

export const setWidth = (value) => async (dispatch) => {
  dispatch({
    type: SET_WIDTH,
    payload: value,
  });
};

export const setBackgroundColor = (value) => async (dispatch) => {
  dispatch({
    type: SET_BACKGROUNDCOLOR,
    payload: value,
  });
};

export const setColor = (value) => async (dispatch) => {
  dispatch({
    type: SET_COLOR,
    payload: value,
  });
};

export const setBorderStyle = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERSTYLE,
    payload: value,
  });
};

export const setBorderStyleTop = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERSTYLE_TOP,
    payload: value,
  });
};

export const setBorderStyleRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERSTYLE_RIGHT,
    payload: value,
  });
};

export const setBorderStyleBottom = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERSTYLE_BOTTOM,
    payload: value,
  });
};

export const setBorderStyleLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERSTYLE_LEFT,
    payload: value,
  });
};

export const setBorderColor = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERCOLOR,
    payload: value,
  });
};
export const setBorderColorTop = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERCOLOR_TOP,
    payload: value,
  });
};

export const setBorderColorRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERCOLOR_RIGHT,
    payload: value,
  });
};

export const setBorderColorBottom = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERCOLOR_BOTTOM,
    payload: value,
  });
};

export const setBorderColorLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERCOLOR_LEFT,
    payload: value,
  });
};

export const setBoxShadow = (value) => async (dispatch) => {
  dispatch({
    type: SET_BOXSHADOW,
    payload: value,
  });
};

export const setTextShadow = (value) => async (dispatch) => {
  dispatch({
    type: SET_TEXTSHADOW,
    payload: value,
  });
};

export const setBorderWidth = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERWIDTH,
    payload: value,
  });
};

export const setBorderWidthTop = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERWIDTH_TOP,
    payload: value,
  });
};

export const setBorderWidthRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERWIDTH_RIGHT,
    payload: value,
  });
};

export const setBorderWidthBottom = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERWIDTH_BOTTOM,
    payload: value,
  });
};

export const setBorderWidthLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERWIDTH_LEFT,
    payload: value,
  });
};

export const setBorderRadius = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERRADIUS,
    payload: value,
  });
};

export const setBorderRadiusTopLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERRADIUS_TOPLEFT,
    payload: value,
  });
};

export const setBorderRadiusTopRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERRADIUS_TOPRIGHT,
    payload: value,
  });
};

export const setBorderRadiusBottomRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERRADIUS_BOTTOMRIGHT,
    payload: value,
  });
};

export const setBorderRadiusBottomLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_BORDERRADIUS_BOTTOMLEFT,
    payload: value,
  });
};

export const setMargin = (value) => async (dispatch) => {
  dispatch({
    type: SET_MARGIN,
    payload: value,
  });
};

export const setMarginTop = (value) => async (dispatch) => {
  dispatch({
    type: SET_MARGIN_TOP,
    payload: value,
  });
};

export const setMarginRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_MARGIN_RIGHT,
    payload: value,
  });
};

export const setMarginBottom = (value) => async (dispatch) => {
  dispatch({
    type: SET_MARGIN_BOTTOM,
    payload: value,
  });
};

export const setMarginLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_MARGIN_LEFT,
    payload: value,
  });
};

export const setPadding = (value) => async (dispatch) => {
  dispatch({
    type: SET_PADDING,
    payload: value,
  });
};

export const setPaddingTop = (value) => async (dispatch) => {
  dispatch({
    type: SET_PADDING_TOP,
    payload: value,
  });
};

export const setPaddingRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_PADDING_RIGHT,
    payload: value,
  });
};

export const setPaddingBottom = (value) => async (dispatch) => {
  dispatch({
    type: SET_PADDING_BOTTOM,
    payload: value,
  });
};

export const setPaddingLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_PADDING_LEFT,
    payload: value,
  });
};

export const setFontSize = (value) => async (dispatch) => {
  dispatch({
    type: SET_FONTSIZE,
    payload: value,
  });
};

export const setFontFamily = (value) => async (dispatch) => {
  dispatch({
    type: SET_FONTFAMILY,
    payload: value,
  });
};
