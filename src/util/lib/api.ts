// eslint-disable-next-line import/order
import { XIntroductionData } from '../../types';
import { reqAPI } from './index';

export const postXIntroduction = async (postXIntroductionBody: XIntroductionData) => {
  return reqAPI.post('/x-introduction', postXIntroductionBody);
};

export const getXInformation = async (introductionId: number) => {
  return reqAPI.get(`/x-introduction/${introductionId}`);
};

export const postXInformationStatus = async (introductionId: number, status: boolean) => {
  return reqAPI.patch(`/x-introduction/${introductionId}`, status);
};
