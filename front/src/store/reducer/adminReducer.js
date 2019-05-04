import { DO_NOTHING, SET_CANDIDATOS, SET_CANDIDATA, SET_WINNERS } from '../constants';

const initialState = {
  nothingForNow: "",
  candidatos: [],
  candidata: {},
  winners
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
    case SET_WINNERS:{
        return Object.assign({}, state, { winners: action.winners });
      }  
    default:
      return state;
  }
}