import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { XLogoIcon } from '../../src/asset/icon';

const Main = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <StWrap>
      <StSubTitle>당신의 X는,</StSubTitle>
      <XLogoIcon />
      <StStartBtn onClick={goToLogin}>시작하기</StStartBtn>
    </StWrap>
  );
};

export default Main;

const StStartBtn = styled.p`
  padding: 1.4rem 6.6rem 1.1rem 6.5rem;
  margin-top: 7.9rem;

  background: #ffffff;
  border: 0.2rem solid #000000;
  border-radius: 10rem;
  font-family: 'S-CoreDream-3Light';
  font-style: normal;
  font-weight: 50rem;
  font-size: 2.4rem;
  line-height: 2.9rem;
`;

const StSubTitle = styled.p`
  margin-bottom: 1.9rem;

  color: #853636;
  font-family: 'S-CoreDream-3Light';
  font-size: 2rem;
  font-weight: 20rem;
  line-height: 2.4rem;
  letter-spacing: 0.16rem;
  text-align: center;
`;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 39rem;
  height: 84.4rem;
  margin-top: 21.6rem;
`;
