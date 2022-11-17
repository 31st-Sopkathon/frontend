import { reqAPI } from './index';

export const getUser = async (params: string) => {
  return reqAPI.get(`/${params}`);
};
