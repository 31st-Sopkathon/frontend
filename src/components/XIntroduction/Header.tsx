import styled from 'styled-components';

const Header = () => {
  return <StHeaderWrapper>나의 X를 소개합니다.</StHeaderWrapper>;
};

export default Header;

const StHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  text-align: center;

  margin-top: 6.15rem;
  margin-bottom: 10.1rem;

  font-family: 'S-Core Dream';
  font-style: normal;
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 2.6rem;

  color: #853636;

  color: #853636;
`;
