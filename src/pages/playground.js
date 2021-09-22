import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import MemberGrid from '../components/MemberGrid';

const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;
  background: linear-gradient(-45deg, #32393e, #1d2026);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Playground = () => (
  <Container>
    <MemberGrid />
  </Container>
);

export default Playground;
