import { DO_NOTHING } from '../constants';

const initialState = {
  nothingForNow: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DO_NOTHING: {
      return Object.assign({}, state, { cart: action.nothingForNow });
    }
    default:
      return state;
  }
}