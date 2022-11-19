import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import XCorrectButtonImage from '../asset/image/XCorrectButtonImage.png';
import XIncorrectButtonImage from '../asset/image/XIncorrectButtonImage.png';
import { postXInformationStatus } from '../util/lib/api';

const SelectResult = () => {
  const introductionId = 1;

  const navigate = useNavigate();

  const clickCorrectButton = async (introductionId: number) => {
    try {
      const data = postXInformationStatus(introductionId, true);
    } catch (error) {
      navigate('*');
    }
  };

  const clickInCorrectButton = async (introductionId: number) => {
    try {
      const data = postXInformationStatus(introductionId, false);
    } catch (error) {
      navigate('*');
    }
  };

  return (
    <StSelectResult>
      <h1>X와 만났나요?</h1>
      <SelectButtonContainer>
        <XCorrectButton type="button" onClick={() => clickCorrectButton(introductionId)}>
          <img src={XCorrectButtonImage} alt="O 버튼" />
        </XCorrectButton>
        <XInCorrectButton type="button" onClick={() => clickInCorrectButton(introductionId)}>
          <img src={XIncorrectButtonImage} alt="X 버튼" />
        </XInCorrectButton>
      </SelectButtonContainer>
    </StSelectResult>
  );
};

export default SelectResult;

const StSelectResult = styled.div`
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    font-family: 'S-CoreDream-3Light';
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 2.6rem;
    text-align: center;

    margin-top: 145px;
    color: #853636;
  }
`;

const SelectButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const XCorrectButton = styled.button`
  width: 162px;
  height: 52px;

  margin-right: 1.6rem;
`;

const XInCorrectButton = styled.button`
  width: 162px;
  height: 52px;
`;
