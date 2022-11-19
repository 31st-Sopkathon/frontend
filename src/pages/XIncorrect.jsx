import styled from 'styled-components';

import downloadIcon from '../asset/icon/downloadIcon.png';
import XIncorrectBackground from '../asset/image/XIncorrectBackground.png';
import XIncorrectBanner from '../asset/image/XIncorrectBanner.png';

const XIncorrect = () => {
  return (
    <StXIncorrect>
      <img src={XIncorrectBanner} alt="불일치" />
      <DownloadImage src={downloadIcon} alt="다운로드 아이콘"></DownloadImage>
      <h1>
        &quot;당신의 X는 당신을 <br /> 선택하지 않았습니다.&quot;
      </h1>
    </StXIncorrect>
  );
};

export default XIncorrect;

const StXIncorrect = styled.div`
  width: 390px;
  height: 844px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${XIncorrectBackground});

  & > h1 {
    width: 18rem;
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
