import axios from 'axios';
import {DO_NOTHING
} from '../constants';


export const setCart = function setCart(cart) {
  return {
    type: DO_NOTHING,
    nothingForNow: 'Prueba de react redux',
  };
};

export const saveCandidate = (candidate) => dispatch =>
  axios.post('/api/addCandidate', { candidate })
    .then(res => res.data)
    .then(respuesta => {
      console.log('RESPUESTAAA', respuesta)
    });