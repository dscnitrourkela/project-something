import React from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.div`
  width: 355px;
  height: 225px;
  min-width: 355px;
  border-radius: 20px;

  background: radial-gradient(rgba(159, 195, 212, 0.1), rgba(159, 195, 212, 0.1));
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  margin: 15px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const BoldHeading = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #9fc3d4;
  margin: 0;
  margin-bottom: 5px;
`;

const NormalPara = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #9fc3d4;
  margin: 0;
`;

const SingleStatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;

const StatsContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 100%;
  margin: 0px;
  background-color: #385d6f;
`;

const FirstRow = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SecondRow = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 25px;
`;

const ThirdRow = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 25px;
`;

const MemberCard = () => {
  const stats = [
    {
      name: 'repos',
      count: 237,
    },
    {
      name: 'commits',
      count: '10k',
    },
    {
      name: 'orgs',
      count: 52,
    },
  ];

  const user = {
    name: 'Ritesh Patil',
    img: 'https://www.riteshpatil.dev/static/64df91c784959766b37dfdaece83e6b8/5f169/Ritesh.webp',
    description: 'Developer | Designer | Tech Enthusiast | Photographer',
  };

  return (
    <CardContainer>
      <FirstRow>
        <UserImage src={user.img} alt={user.name} />
        <StatsContainer>
          {stats.map(({ name, count }) => (
            <SingleStatContainer key={`${name}-${count}`}>
              <BoldHeading>{count}</BoldHeading>
              <NormalPara>{name}</NormalPara>
            </SingleStatContainer>
          ))}
        </StatsContainer>
      </FirstRow>

      <SecondRow>
        <BoldHeading style={{ fontSize: '16px', marginBottom: '5px' }}>{user.name}</BoldHeading>
        <NormalPara
          style={{
            fontSize: '14px',
            fontWeight: '300',
            letterSpacing: '0.5px',
            lineHeight: '16px',
          }}
        >
          {user.description}
        </NormalPara>
      </SecondRow>

      <ThirdRow>
        <FontAwesomeIcon size='lg' icon={faTwitter} color='#9FC3D4' />
        <FontAwesomeIcon size='lg' icon={faLinkedin} color='#9FC3D4' />
        <FontAwesomeIcon size='lg' icon={faGlobe} color='#9FC3D4' />
      </ThirdRow>
    </CardContainer>
  );
};

export default MemberCard;
