import { API } from './api';

export type Options = {
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  headers: {
    Authorization: string;
  };
  data?: any;
  url: string;
};

export const requestAPI = async (options: Options) => {
  try {
    const { data } = await API(options);
    return { error: false, response: data };
  } catch (error) {
    return { error: true, response: error };
  }
};
