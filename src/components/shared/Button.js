import React from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonContainer = styled.button`
  border: none;
  background-color: transparent;
  margin: 10px;
  padding: 0px;
  width: 56px;
  height: 56px;
  position: relative;

  transition: transform 0.3s;
  &:active {
    transform: scale(0.9);
  }
`;

const Layer1 = styled.div`
  width: 52.5px;
  height: 52.5px;
  border-radius: 50%;
  background: linear-gradient(135deg, #016bb8, #11a8fd);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  z-index: 10004;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layer2 = styled.div`
  width: 52.5px;
  height: 52.5px;
  border-radius: 50%;
  background: linear-gradient(135deg, #005ea3, #11a8fd);
  border: 1px solid #058dd9;

  z-index: 3;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const Layer3 = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #11a8fd, #0081c9);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  z-index: 2;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const Layer4 = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #11a8fd, #0081c9);
  box-shadow: 10px 15px 40px rgba(0, 0, 0, 0.5);

  z-index: 1;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  transition: all 0.3s;
  &:active {
    box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Button = ({ icon }) => (
  <ButtonContainer>
    <Layer4 />
    <Layer3 />
    <Layer2 />
    <Layer1>
      <FontAwesomeIcon icon={icon} color='#ffffff' size='lg' />
    </Layer1>
  </ButtonContainer>
);

export default Button;
