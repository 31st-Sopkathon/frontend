import React, { Fragment, useCallback, useRef } from 'react';
import styled from 'styled-components';

import XInfo from '../components/Capture/XInfo';
// import { useCapture } from '../util/hooks/useCapture';

const Capture = () => {
  //   const { snap } = useCapture();
  //   const element = useRef(null);

  //   const onClick = useCallback(() => {
  //     snap(element, { file: 'download.png' });
  //   }, [snap, element]);

  return (
    <Fragment>
      <h1>x 소개서 </h1>
      {/* <StXInfoWrapper ref={element}>
        <XInfo />
      </StXInfoWrapper>
      <button onClick={onClick} value="Download">
        저장하기
      </button> */}
    </Fragment>
  );
};

export default Capture;

const StXInfoWrapper = styled.article``;
