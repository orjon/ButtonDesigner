import {
  SET_HEIGHT,
  SET_WIDTH,
  SET_BACKGROUNDCOLOR,
  SET_COLOR,
  SET_BORDERRADIUS,
  SET_BORDERCOLOR,
  SET_BORDER,
  SET_BORDERWIDTH,
  SET_BORDERWIDTH_TOP,
  SET_BORDERWIDTH_RIGHT,
  SET_BORDERWIDTH_BOTTOM,
  SET_BORDERWIDTH_LEFT,
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
} from '../actions/types';

const initialState = {
  height: '30px',
  width: '200px',
  backgroundColor: 'rgba(31,143,255,1)',
  color: 'rgba(255,255,255,1)',
  borderColor: 'rgba(255,255,255,1)',
  borderStyle: 'solid',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderBottomWidth: '1px',
  borderLeftWidth: '1px',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  marginTop: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  paddingTop: '0px',
  paddingRight: '0px',
  paddingBottom: '0px',
  paddingLeft: '0px',
  fontSize: '12pt',
};

const buttonStyle = (state = initialState, actions) => {
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

    case SET_BACKGROUNDCOLOR:
      return {
        ...state,
        backgroundColor: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
      };

    case SET_COLOR:
      return {
        ...state,
        color: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
      };

    case SET_BORDERCOLOR:
      return {
        ...state,
        borderColor: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
      };

    case SET_BORDERWIDTH:
      return {
        ...state,
        borderTopWidth: payload,
        borderRightWidth: payload,
        borderBottomWidth: payload,
        borderLeftWidth: payload,
      };

    case SET_BORDERWIDTH_TOP:
      return {
        ...state,
        borderTopWidth: payload,
      };
    case SET_BORDERWIDTH_RIGHT:
      return {
        ...state,
        borderRightWidth: payload,
      };
    case SET_BORDERWIDTH_BOTTOM:
      return {
        ...state,
        borderBottomWidth: payload,
      };
    case SET_BORDERWIDTH_LEFT:
      return {
        ...state,
        borderLeftWidth: payload,
      };

    case SET_BORDER:
      return {
        ...state,
        border: payload,
      };

    case SET_BORDERRADIUS:
      return {
        ...state,
        borderTopLeftRadius: payload,
        borderTopRightRadius: payload,
        borderBottomRightRadius: payload,
        borderBottomLeftRadius: payload,
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
        borderTopLeftRadius: payload,
      };
    case SET_BORDERRADIUS_TOPRIGHT:
      return {
        ...state,
        borderTopRightRadius: payload,
      };
    case SET_BORDERRADIUS_BOTTOMRIGHT:
      return {
        ...state,
        borderBottomRightRadius: payload,
      };
    case SET_BORDERRADIUS_BOTTOMLEFT:
      return {
        ...state,
        borderBottomLeftRadius: payload,
      };

    case SET_FONTSIZE:
      return {
        ...state,
        fontSize: payload,
      };

    default:
      return state;
  }
};

export default buttonStyle;
