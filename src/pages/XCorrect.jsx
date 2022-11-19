import styled from 'styled-components';

import downloadIcon from '../asset/icon/downloadIcon.png';
import XCorrectBanner from '../asset/image/XCorrectBanner.png';

const XCorrect = () => {
  return (
    <StXCorrect>
      <img src={XCorrectBanner} alt="일치" />
      <DownloadImage src={downloadIcon} alt="다운로드 아이콘"></DownloadImage>
      <h1>
        &quot;당신의 X는 <br /> O가 되었습니다.&quot;
      </h1>
    </StXCorrect>
  );
};

export default XCorrect;

const StXCorrect = styled.div`
  width: 390px;
  height: 844px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    width: 14rem;
    height: 4.9rem;

    font-family: 'S-CoreDream-3Light';
    font-size: 1.78rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-align: center;

    color: white;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const DownloadImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  position: absolute;
  left: 33.1rem;
  top: 6.6rem;
`;
