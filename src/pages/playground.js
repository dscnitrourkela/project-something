import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import UserShowcaseCard from '../components/shared/UserShowcaseCard';

const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;
  background: linear-gradient(315deg, #32393e, #1d2026);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Playground = () => (
  <Container>
    <UserShowcaseCard />
  </Container>
);

export default Playground;
