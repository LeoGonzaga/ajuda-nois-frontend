import { requestAPI, Options } from '@services/api';

export const createUser = async (options: Options) => {
  try {
    const response = await requestAPI(options);
    return response;
  } catch (error) {
    return error;
  }
};
