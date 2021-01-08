import { SET_TEXT } from '../actions/types';

const initialState = {
  text: 'Button Text',
};

const buttonText = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case SET_TEXT:
      return {
        ...state,
        text: payload,
      };

    default:
      return state;
  }
};

export default buttonText;
