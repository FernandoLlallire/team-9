import axios from 'axios';
import {DO_NOTHING , SET_CANDIDATOS, SET_CANDIDATA
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

export const setWinnersss = function setWinners(winners) {
  return {
    type: SET_WINNERS,
    winners,
  };
};

export const setCandidate = function setCandidate(candidata) {
  
  return {
    type: SET_CANDIDATA,
    candidata
  };
};

export const saveCandidate = (candidate) =>
  axios.post('http://localhost:3001/api/addCandidate', { candidate })
    .then(res => res.data)
    .then(respuesta => {
      console.log('RESPUESTAAA', respuesta)
    });

export const fetchCandidates = () => dispatch =>
axios.get('http://localhost:3001/api/getAllCandidates')
  .then(res => res.data)
  .then(candidatos => dispatch(setCandidates(candidatos)));

export const setWinners = (winners) => {
  axios.post('http://localhost:3001/api/setWinners', { winners })
    .then(res => res.data)
    .then( respuesta => console.log(respuesta))}

export const fetchCandidate = (idCand) => dispatch =>
  axios.get(`http://localhost:3001/api/getUser/${idCand}`)
    .then(res => res.data[0])
    .then(candidata => dispatch(setCandidate(candidata)));

export const fetchWinners = () => dispatch =>
  axios.get('http://localhost:3001/api/getWinners')
    .then(res => res.data)
    .then(winners => dispatch(setWinnersss(winners)));