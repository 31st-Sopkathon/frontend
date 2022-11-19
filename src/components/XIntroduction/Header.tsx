import styled from 'styled-components';

const Header = () => {
  return <StHeaderWrapper>나의 X를 소개합니다</StHeaderWrapper>;
};

export default Header;

const StHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;

  font-family: 'S-Core Dream';
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;

  color: #853636;
`;
