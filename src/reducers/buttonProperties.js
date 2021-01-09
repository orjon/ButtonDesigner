import { SET_TEXT, SET_SELECTOR } from '../actions/types';

const initialState = {
  text: 'Button Text',
  selector: 'buttonSelector',
};

const buttonText = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case SET_TEXT:
      return {
        ...state,
        text: payload,
      };

    case SET_SELECTOR:
      return {
        ...state,
        text: payload,
      };

    default:
      return state;
  }
};

export default buttonText;
