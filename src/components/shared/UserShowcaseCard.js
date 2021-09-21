import React from 'react';

// Libraries
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 355px;
  height: 225px;
  border-radius: 25px;
  background: radial-gradient(rgba(17, 168, 253, 0.1), rgba(0, 129, 201, 0.1));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const UserShowcaseCard = () => (
  <CardContainer>
    <h1>Hello</h1>
  </CardContainer>
);

export default UserShowcaseCard;
