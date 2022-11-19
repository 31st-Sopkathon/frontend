// eslint-disable-next-line import/order
import { XIntroductionData } from '../../types';
import { reqAPI } from './index';

export const postXIntroduction = async (postXIntroductionBody: XIntroductionData) => {
  return reqAPI.post('/x-introduction', postXIntroductionBody);
};
