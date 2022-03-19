import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://busao.herokuapp.com',
});
