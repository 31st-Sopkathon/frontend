import React, { Fragment, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '../components/XIntroduction';
import { XIntroduction } from '../types';
import { useCapture } from '../util/hooks/useCapture';
import { postXIntroduction } from '../util/lib/api';

interface XIntroductionLocation {
  state: XIntroduction;
}
const XIntroduction = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as XIntroductionLocation;

  const { snap } = useCapture();
  const captureRef = useRef<HTMLDivElement>(null);

  const handleCaptureBtn = useCallback(() => {
    snap(captureRef, { file: 'download.png' });
    postXIntroductionData();
  }, [snap, captureRef]);

  const postXIntroductionData = async () => {
    try {
      const response = await postXIntroduction(state);
      console.log(response.data);
    } catch (e) {}
  };
  return (
    <StXIntroductionWrapper>
      <StCaptureWrapper ref={captureRef}>
        <Header />
      </StCaptureWrapper>
      <button onClick={handleCaptureBtn} value="Download">
        저장하기
      </button>
    </StXIntroductionWrapper>
  );
};

export default XIntroduction;

const StXIntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StCaptureWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
