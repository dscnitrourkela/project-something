import React from 'react';

// Libraries
import styled from 'styled-components';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

// Components
import MemberGrid from '../components/MemberGrid';
import Button from '../components/shared/Button';

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
  <>
    <div style={{ backgroundColor: '#424750' }}>
      <Button icon={faUsers} />
    </div>
    <Container>
      <MemberGrid />
    </Container>
  </>
);

export default Playground;
