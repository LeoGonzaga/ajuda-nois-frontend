import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://ajuda-nois.herokuapp.com',
  validateStatus: function (status) {
    return status <= 500;
  },
});
