import {
  SET_HEIGHT,
  SET_WIDTH,
  SET_BACKGROUNDCOLOR,
  SET_COLOR,
  SET_BORDERRADIUS,
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
  SET_BORDERWIDTH,
  SET_BORDERWIDTH_TOP,
  SET_BORDERWIDTH_RIGHT,
  SET_BORDERWIDTH_BOTTOM,
  SET_BORDERWIDTH_LEFT,
  SET_BORDERRADIUS_TOPLEFT,
  SET_BORDERRADIUS_TOPRIGHT,
  SET_BORDERRADIUS_BOTTOMRIGHT,
  SET_BORDERRADIUS_BOTTOMLEFT,
  SET_SHADOW,
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
  selector: 'myButton',
  height: '30px',
  width: '200px',
  backgroundColor: 'rgba(31,143,255,1)',
  color: 'rgba(255,255,255,1)',

  borderTopStyle: 'solid',
  borderRightStyle: 'solid',
  borderBottomStyle: 'solid',
  borderLeftStyle: 'solid',

  boxShadow: '0px 0px 0px 0px rgba(255,255,255,1)',

  borderTopColor: 'rgba(255,255,255,1)',
  borderRightColor: 'rgba(255,255,255,1)',
  borderBottomColor: 'rgba(255,255,255,1)',
  borderLeftColor: 'rgba(255,255,255,1)',

  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderBottomWidth: '1px',
  borderLeftWidth: '1px',

  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',

  shadowHOffset: '0px',
  shadowVOffset: '0px',
  shadowBlur: '0px',
  shadowSpread: '0px',

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

    case SET_SHADOW: {
      const { inset, hOffset, vOffset, blur, spread, color } = payload;

      let insetValue = '';

      if (inset) insetValue = 'inset';

      if (payload === '0') {
        return {
          ...state,
          boxShadow: payload,
        };
      } else {
        return {
          ...state,
          boxShadow: `${insetValue} ${hOffset} ${vOffset} ${blur} ${spread} rgba(${color.r},${color.g},${color.b},${color.a})`,
        };
      }
    }

    case SET_COLOR:
      return {
        ...state,
        color: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
      };

    case SET_BORDERSTYLE:
      return {
        ...state,
        borderTopStyle: payload,
        borderRightStyle: payload,
        borderBottomStyle: payload,
        borderLeftStyle: payload,
      };

    case SET_BORDERSTYLE_TOP:
      return {
        ...state,
        borderTopStyle: payload,
      };
    case SET_BORDERSTYLE_RIGHT:
      return {
        ...state,
        borderRightStyle: payload,
      };
    case SET_BORDERSTYLE_BOTTOM:
      return {
        ...state,
        borderBottomStyle: payload,
      };
    case SET_BORDERSTYLE_LEFT:
      return {
        ...state,
        borderLeftStyle: payload,
      };

    case SET_BORDERCOLOR:
      return {
        ...state,
        borderTopColor: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
        borderRightColor: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
        borderBottomColor: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
        borderLeftColor: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
      };
    case SET_BORDERCOLOR_TOP:
      return {
        ...state,
        borderTopColor: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
      };
    case SET_BORDERCOLOR_RIGHT:
      return {
        ...state,
        borderRightColor: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
      };
    case SET_BORDERCOLOR_BOTTOM:
      return {
        ...state,
        borderBottomColor: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
      };
    case SET_BORDERCOLOR_LEFT:
      return {
        ...state,
        borderLeftColor: `rgba(${payload.r},${payload.g},${payload.b},${payload.a})`,
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
