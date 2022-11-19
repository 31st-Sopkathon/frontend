import { reqAPI } from './index';

export const getUser = async (params: string) => {
  return reqAPI.get(`/${params}`);
};

export const getXInformation = async (introductionId: number) => {
  return reqAPI.get(`/x-introduction/${introductionId}`);
};

export const postXInformationStatus = async (introductionId: number, status: boolean) => {
  return reqAPI.patch(`/x-introduction/${introductionId}`, status);
};
