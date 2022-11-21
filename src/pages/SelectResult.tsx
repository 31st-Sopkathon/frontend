import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ICLetterTop } from '../asset/icon';
import XCorrectButtonImage from '../asset/image/XCorrectButtonImage.png';
import XIncorrectButtonImage from '../asset/image/XIncorrectButtonImage.png';
import { LetterInfo } from '../components/common';
import { postXInformationStatus } from '../util/lib/api';

const SelectResult = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { wantReason, cannotReason, term, introductionId } = state;

  const clickCorrectButton = async (introductionId: number) => {
    // const data = await axios.patch(`${process.env.REACT_APP_IP}/x-introduction/${introductionId}`, { status: true });
    // console.log(data);
    navigate('/xcorrect');
  };

  const clickInCorrectButton = async (introductionId: number) => {
    // const data = await axios.patch(`${process.env.REACT_APP_IP}/x-introduction/${introductionId}`, { status: false });
    // console.log(data);
    navigate('/xincorrect');
  };

  return (
    <StSelectResult>
      <h1>X와 만났나요?</h1>
      <LetterInfo wantReason={wantReason} cannotReason={cannotReason} term={term} />

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
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 39rem;
  height: 84.4rem;

  & > h1 {
    font-family: 'S-CoreDream-3Light';
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 2.6rem;
    text-align: center;

    margin-top: 14.5rem;
    color: #853636;
  }
`;

const SelectButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 4.7rem;
  button {
    background-color: none;
    border: none;
  }
`;
const XCorrectButton = styled.button`
  width: 16.2rem;
  height: 5.2rem;

  margin-right: 1.6rem;
`;

const XInCorrectButton = styled.button`
  width: 16.2rem;
  height: 5.2rem;
`;
