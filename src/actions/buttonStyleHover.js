import {
  SET_HOVER_HEIGHT,
  SET_HOVER_WIDTH,
  SET_HOVER_BACKGROUNDCOLOR,
  SET_HOVER_COLOR,
  SET_HOVER_BORDERSTYLE,
  SET_HOVER_BORDERSTYLE_TOP,
  SET_HOVER_BORDERSTYLE_RIGHT,
  SET_HOVER_BORDERSTYLE_BOTTOM,
  SET_HOVER_BORDERSTYLE_LEFT,
  SET_HOVER_BORDERCOLOR,
  SET_HOVER_BORDERCOLOR_TOP,
  SET_HOVER_BORDERCOLOR_RIGHT,
  SET_HOVER_BORDERCOLOR_BOTTOM,
  SET_HOVER_BORDERCOLOR_LEFT,
  SET_HOVER_BOXSHADOW,
  SET_HOVER_TEXTSHADOW,
  SET_HOVER_BORDERWIDTH,
  SET_HOVER_BORDERWIDTH_TOP,
  SET_HOVER_BORDERWIDTH_RIGHT,
  SET_HOVER_BORDERWIDTH_BOTTOM,
  SET_HOVER_BORDERWIDTH_LEFT,
  SET_HOVER_BORDERRADIUS,
  SET_HOVER_BORDERRADIUS_TOPLEFT,
  SET_HOVER_BORDERRADIUS_TOPRIGHT,
  SET_HOVER_BORDERRADIUS_BOTTOMRIGHT,
  SET_HOVER_BORDERRADIUS_BOTTOMLEFT,
  SET_HOVER_MARGIN,
  SET_HOVER_MARGIN_TOP,
  SET_HOVER_MARGIN_RIGHT,
  SET_HOVER_MARGIN_BOTTOM,
  SET_HOVER_MARGIN_LEFT,
  SET_HOVER_PADDING,
  SET_HOVER_PADDING_TOP,
  SET_HOVER_PADDING_RIGHT,
  SET_HOVER_PADDING_BOTTOM,
  SET_HOVER_PADDING_LEFT,
  SET_HOVER_FONTSIZE,
} from './types';

export const setHoverHeight = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_HEIGHT,
    payload: value,
  });
};

export const setHoverWidth = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_WIDTH,
    payload: value,
  });
};

export const setHoverBackgroundColor = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BACKGROUNDCOLOR,
    payload: value,
  });
};

export const setHoverColor = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_COLOR,
    payload: value,
  });
};

export const setHoverBorderStyle = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERSTYLE,
    payload: value,
  });
};

export const setHoverBorderStyleTop = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERSTYLE_TOP,
    payload: value,
  });
};

export const setHoverBorderStyleRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERSTYLE_RIGHT,
    payload: value,
  });
};

export const setHoverBorderStyleBottom = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERSTYLE_BOTTOM,
    payload: value,
  });
};

export const setHoverBorderStyleLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERSTYLE_LEFT,
    payload: value,
  });
};

export const setHoverBorderColor = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERCOLOR,
    payload: value,
  });
};
export const setHoverBorderColorTop = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERCOLOR_TOP,
    payload: value,
  });
};

export const setHoverBorderColorRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERCOLOR_RIGHT,
    payload: value,
  });
};

export const setHoverBorderColorBottom = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERCOLOR_BOTTOM,
    payload: value,
  });
};

export const setHoverBorderColorLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERCOLOR_LEFT,
    payload: value,
  });
};

export const setHoverBoxShadow = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BOXSHADOW,
    payload: value,
  });
};

export const setHoverTextShadow = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_TEXTSHADOW,
    payload: value,
  });
};

export const setHoverBorderWidth = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERWIDTH,
    payload: value,
  });
};

export const setHoverBorderWidthTop = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERWIDTH_TOP,
    payload: value,
  });
};

export const setHoverBorderWidthRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERWIDTH_RIGHT,
    payload: value,
  });
};

export const setHoverBorderWidthBottom = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERWIDTH_BOTTOM,
    payload: value,
  });
};

export const setHoverBorderWidthLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERWIDTH_LEFT,
    payload: value,
  });
};

export const setHoverBorderRadius = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERRADIUS,
    payload: value,
  });
};

export const setHoverBorderRadiusTopLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERRADIUS_TOPLEFT,
    payload: value,
  });
};

export const setHoverBorderRadiusTopRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERRADIUS_TOPRIGHT,
    payload: value,
  });
};

export const setHoverBorderRadiusBottomRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERRADIUS_BOTTOMRIGHT,
    payload: value,
  });
};

export const setHoverBorderRadiusBottomLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_BORDERRADIUS_BOTTOMLEFT,
    payload: value,
  });
};

export const setHoverMargin = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_MARGIN,
    payload: value,
  });
};

export const setHoverMarginTop = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_MARGIN_TOP,
    payload: value,
  });
};

export const setHoverMarginRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_MARGIN_RIGHT,
    payload: value,
  });
};

export const setHoverMarginBottom = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_MARGIN_BOTTOM,
    payload: value,
  });
};

export const setHoverMarginLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_MARGIN_LEFT,
    payload: value,
  });
};

export const setHoverPadding = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_PADDING,
    payload: value,
  });
};

export const setHoverPaddingTop = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_PADDING_TOP,
    payload: value,
  });
};

export const setHoverPaddingRight = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_PADDING_RIGHT,
    payload: value,
  });
};

export const setHoverPaddingBottom = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_PADDING_BOTTOM,
    payload: value,
  });
};

export const setHoverPaddingLeft = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_PADDING_LEFT,
    payload: value,
  });
};

export const setHoverFontSize = (value) => async (dispatch) => {
  dispatch({
    type: SET_HOVER_FONTSIZE,
    payload: value,
  });
};
