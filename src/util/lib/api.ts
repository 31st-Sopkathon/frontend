// eslint-disable-next-line import/order
import { XIntroduction } from '../../types';
import { reqAPI } from './index';

export const postXIntroduction = async (postXIntroductionBody: XIntroduction) => {
  return reqAPI.post('/x-introduction', postXIntroductionBody);
};
