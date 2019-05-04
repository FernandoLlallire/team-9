import { DO_NOTHING, SET_CANDIDATOS, SET_CANDIDATA } from '../constants';

const initialState = {
  nothingForNow: "",
  candidatos: [],
  candidata: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DO_NOTHING: {
      return Object.assign({}, state, { cart: action.nothingForNow });
    }
    case SET_CANDIDATOS:{
      return Object.assign({}, state, { candidatos: action.candidatos });
    }
    case SET_CANDIDATA:{
        return Object.assign({}, state, { candidata: action.candidata });
      }
    default:
      return state;
  }
}