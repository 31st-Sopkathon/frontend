import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { LetterInfo } from '../components/common';
import { Header } from '../components/XIntroduction';

const CopyXInfo = () => {
  const { state } = useLocation();

  return (
    <StXIntroductionWrapper>
      <Header />
      <LetterInfo wantReason={`http://localhost:3000/relogin/${state}`} />
    </StXIntroductionWrapper>
  );
};

export default CopyXInfo;

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
