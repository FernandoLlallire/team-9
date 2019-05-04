import axios from 'axios';
import {DO_NOTHING , SET_CANDIDATOS
} from '../constants';


export const setCart = function setCart(cart) {
  return {
    type: DO_NOTHING,
    nothingForNow: 'Prueba de react redux',
  };
};

export const setCandidates = function setCandidates(candidatos) {
  return {
    type: SET_CANDIDATOS,
    candidatos,
  };
};

export const saveCandidate = (candidate) => dispatch =>
  axios.post('/api/addCandidate', { candidate })
    .then(res => res.data)
    .then(respuesta => {
      console.log('RESPUESTAAA', respuesta)
    });

export const fetchCandidates = () => dispatch =>
axios.get('http://localhost:3001/api/getAllCandidates')
  .then(res => res.data)
  .then(candidatos => dispatch(setCandidates(candidatos)));