import React from 'react';

// Libraries
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100px;
  height: auto;

  animation: ${loading} 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

const Loader = () => (
  <Container>
    <Img
      src='https://res.cloudinary.com/dscnitrourkela/image/upload/Gitwars/xm6ww3pkeaj7kys3kvdg.png'
      alt='Gitwars Loader'
      s
    />
  </Container>
);

export default Loader;
