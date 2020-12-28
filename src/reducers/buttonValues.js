import {
  SET_HEIGHT,
  SET_WIDTH,
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
  SET_TEXTSIZE,
  SET_TEXT,
} from '../actions/types';

const initialState = {
  height: '30px',
  width: '200px',
  borderRadiusTopLeft: '10px',
  borderRadiusTopRight: '10px',
  borderRadiusBottomRight: '10px',
  borderRadiusBottomLeft: '10px',
  marginTop: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  paddingTop: '0px',
  paddingRight: '0px',
  paddingBottom: '0px',
  paddingLeft: '0px',
  textSize: '12pt',
  buttonText: 'Button Text',
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

    case SET_MARGIN:
      return {
        ...state,
        marginTop: payload,
        marginRight: payload,
        marginBottom: payload,
        marginLeft: payload,
      };

    case SET_PADDING:
      return {
        ...state,
        paddingTop: payload,
        paddingRight: payload,
        paddingBottom: payload,
        paddingLeft: payload,
      };

    case SET_MARGIN_TOP:
      return {
        ...state,
        marginTop: payload,
      };

    case SET_MARGIN_RIGHT:
      return {
        ...state,
        marginRight: payload,
      };

    case SET_MARGIN_BOTTOM:
      return {
        ...state,
        marginBottom: payload,
      };

    case SET_MARGIN_LEFT:
      return {
        ...state,
        marginLeft: payload,
      };

    case SET_PADDING_TOP:
      return {
        ...state,
        paddingTop: payload,
      };

    case SET_PADDING_RIGHT:
      return {
        ...state,
        paddingRight: payload,
      };

    case SET_PADDING_BOTTOM:
      return {
        ...state,
        paddingBottom: payload,
      };

    case SET_PADDING_LEFT:
      return {
        ...state,
        paddingLeft: payload,
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

    case SET_TEXT:
      return {
        ...state,
        buttonText: payload,
      };

    default:
      return state;
  }
};

export default buttonValues;
