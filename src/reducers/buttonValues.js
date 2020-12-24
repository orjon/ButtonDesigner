import {
  SET_HEIGHT,
  SET_WIDTH,
  SET_BORDERRADIUS,
  SET_BORDERRADIUS_TOPLEFT,
  SET_BORDERRADIUS_TOPRIGHT,
  SET_BORDERRADIUS_BOTTOMRIGHT,
  SET_BORDERRADIUS_BOTTOMLEFT,
  SET_TEXTSIZE,
} from '../actions/types';

const initialState = {
  height: '30px',
  width: '200px',
  borderRadiusTopLeft: '10px',
  borderRadiusTopRight: '10px',
  borderRadiusBottomRight: '10px',
  borderRadiusBottomLeft: '10px',
  textSize: '12pt',
};

const buttonValues = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case SET_HEIGHT:
      return {
        ...state,
        height: payload,
      };
    case SET_WIDTH:
      return {
        ...state,
        width: payload,
      };
    case SET_BORDERRADIUS:
      return {
        ...state,
        borderRadiusTopLeft: payload,
        borderRadiusTopRight: payload,
        borderRadiusBottomRight: payload,
        borderRadiusBottomLeft: payload,
      };

    case SET_BORDERRADIUS_TOPLEFT:
      return {
        ...state,
        borderRadiusTopLeft: payload,
      };
    case SET_BORDERRADIUS_TOPRIGHT:
      return {
        ...state,
        borderRadiusTopRight: payload,
      };
    case SET_BORDERRADIUS_BOTTOMRIGHT:
      return {
        ...state,
        borderRadiusBottomRight: payload,
      };
    case SET_BORDERRADIUS_BOTTOMLEFT:
      return {
        ...state,
        borderRadiusBottomLeft: payload,
      };

    case SET_TEXTSIZE:
      return {
        ...state,
        textSize: payload,
      };

    default:
      return state;
  }
};

export default buttonValues;
