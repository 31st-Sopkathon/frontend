import axios from 'axios';
import React, { Fragment, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ICDownloadBtn, ICLetterTop, ICNextBtn } from '../asset/icon';
import { LetterInfo } from '../components/common';
import { Header } from '../components/XIntroduction';
import { XIntroductionData } from '../types';
import { useCapture } from '../util/hooks/useCapture';
import { postXIntroduction } from '../util/lib/api';

interface XIntroductionLocation {
  state: XIntroductionData;
}
const XIntroduction = () => {
  const navigate = useNavigate();
  //   const { state } = useLocation() as XIntroductionLocation;
  const state = {
    userName: '서히',
    category: '운동',
    password: '0113',
    wantReason: '우리',
    cannotReason: '서핑ㅇㅇㅁㄴㅇㅁㄴㅇㅁㄴ',
    term: '2022-11-19T00:00:00.000Z',
  };
  const { wantReason, cannotReason, term } = state;
  const { snap } = useCapture();
  const captureRef = useRef<HTMLDivElement>(null);

  const handleCaptureBtn = useCallback(() => {
    snap(captureRef, { file: 'download.png' });
    postXIntroductionData();
  }, [snap, captureRef]);

  const postXIntroductionData = async () => {
    const response = await axios.post(`${process.env.REACT_APP_IP}/x-introduction`, state);
  };
  return (
    <StXIntroductionWrapper>
      <aside>
        <ICDownloadBtn width={'19.5'} height={'19.5'} onClick={handleCaptureBtn} />
      </aside>
      <StCaptureWrapper ref={captureRef}>
        <Header />
        <LetterInfo wantReason={wantReason} cannotReason={cannotReason} term={term} />
      </StCaptureWrapper>
      <StICNextBtn onClick={() => navigate('/selectResult')} />
    </StXIntroductionWrapper>
  );
};

export default XIntroduction;

const StXIntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  & > aside {
    display: flex;
    flex-direction: row-reverse;

    width: 100%;
    margin-top: 2rem;
    margin-right: 2.45rem;
  }
`;
const StCaptureWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  & > .letter_introduction {
    margin-top: 9.6rem;
  }
`;
const StLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1.9rem;
`;
const StLetterArticle = styled.article`
  background-color: #fffcf3;

  padding: 1.4rem;

  & > .article_wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    padding: 1.9rem;
    border: 0.15rem solid #bfb1ac;

    font-family: 'S-Core Dream';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;

    color: #9e9696;
  }
`;

const StICNextBtn = styled(ICNextBtn)`
  margin-top: 4.6rem;
`;
