import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//import { IcCalendar } from '../../src/asset/icon';

const XInform = () => {
  const navigate = useNavigate();
  const goToXintroduction = () => {
    navigate('/xintroduction');
  };

  const questions = ['함께하고 싶은 이유', '함께하지 못한 이유'];
  const questionList = questions.map((question, index) => (
    <>
      <StSubTitle>
        X와&nbsp; <span key={index}> {question}</span>는 무엇인가요?
      </StSubTitle>
      <StInput>
        <input className="name" type="text" />
      </StInput>
    </>
  ));
  return (
    <StWrapper>
      <StTitle>당신의 X를 소개해주세요.</StTitle>
      <span>{questionList}</span>
      <StSubTitle>
        X를&nbsp; <span>만날 날짜</span>를 선택해주세요.
      </StSubTitle>
      <StInput>
        <input className="date" type="date" />
      </StInput>
      <button onClick={goToXintroduction}>소개서 작성 완료</button>
    </StWrapper>
  );
};

export default XInform;

const StWrapper = styled.div`
  font-family: 'S-CoreDream-3Light';
  width: 39rem;
  height: 84.4rem;
  background-color: #ffeff1;
  margin: auto;
  padding-top: 10.5rem;
  text-align: center;

  button {
    width: 23.2rem;
    height: 4.3rem;
    margin-top: 4rem;
    border: 0.2rem solid #000000;
    font-size: 1.8rem;
    font-weight: 500;
    border-radius: 10rem;
    background: #ffffff;
    cursor: pointer;
  }
`;

const StTitle = styled.div`
  font-weight: 600;
  font-size: 2.2rem;
  padding-bottom: 5.7rem;
  color: #853636;
`;

const StSubTitle = styled.div`
  display: flex;
  margin-left: 3.6rem;
  font-weight: 500;
  font-size: 16px;
  color: #3e3838;
  span {
    color: #853636;
  }
`;

const StInput = styled.div`
  input {
    width: 31.7rem;
    height: 9.9rem;
    padding-left: 1.6rem;
    border-radius: 0.5rem;
    border-style: none;
  }

  .name {
    margin-top: 1.1rem;
    margin-bottom: 4rem;
  }
  .date {
    margin-top: 1.3rem;
    height: 5rem;
    padding-right: 2.5rem;
  }

  //input[type='date']::before {
  //  content: attr(data-placeholder);
  //}
`;
