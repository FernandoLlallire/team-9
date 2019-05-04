import { DO_NOTHING, SET_CANDIDATOS } from '../constants';

const initialState = {
  nothingForNow: "",
  candidatos: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DO_NOTHING: {
      return Object.assign({}, state, { cart: action.nothingForNow });
    }
    case SET_CANDIDATOS:{
      return Object.assign({}, state, { candidatos: action.candidatos });
    }
    default:
      return state;
  }
}