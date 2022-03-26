import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://ajuda-nois.herokuapp.com',
});
