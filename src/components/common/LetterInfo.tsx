import React from 'react';
import styled from 'styled-components';

import { ICLetterTop } from '../../asset/icon';
interface LetterInfoProps {
  wantReason: string;
  cannotReason?: string;
  term?: string;
}
const LetterInfo = (props: LetterInfoProps) => {
  const { wantReason, cannotReason, term } = props;
  return (
    <StLetterWrapper>
      <ICLetterTop />
      <StLetterArticle>
        <div className="article_wrapper">
          <p>{wantReason}</p>
          <p>{cannotReason}</p>
          <p>{term}</p>
        </div>
      </StLetterArticle>
    </StLetterWrapper>
  );
};

export default LetterInfo;
const StLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 35.2rem;
  margin: 1.9rem;
`;
const StLetterArticle = styled.article`
  background-color: #fffcf3;

  width: 100%;
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
