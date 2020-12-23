import {
  SET_HEIGHT,
  SET_WIDTH,
  SET_BORDERRADIUS,
  SET_TEXTSIZE,
} from '../actions/types';

const initialState = {
  height: '30px',
  width: '200px',
  borderRadius: '10px',
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
        borderRadius: payload,
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
