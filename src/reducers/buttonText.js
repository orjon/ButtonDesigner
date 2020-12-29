import { SET_TEXT } from '../actions/types';

const initialState = {
  text: 'Test 123',
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
