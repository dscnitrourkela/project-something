import React from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
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

const socialIcons = {
  twitter: faTwitter,
  linkedin: faLinkedin,
  github: faGithub,
  portfolio: faGlobe,
};

const MemberCard = ({ member }) => (
  <CardContainer>
    <FirstRow>
      <UserImage src={member.img} alt={member.name} />
      <StatsContainer>
        {Object.keys(member.stats).map((key) => (
          <SingleStatContainer key={`${member.stats[key]}-${key}`}>
            <BoldHeading>{member.stats[key]}</BoldHeading>
            <NormalPara>{key}</NormalPara>
          </SingleStatContainer>
        ))}
      </StatsContainer>
    </FirstRow>

    <SecondRow>
      <BoldHeading style={{ fontSize: '16px', marginBottom: '5px' }}>{member.name}</BoldHeading>
      <NormalPara
        style={{
          fontSize: '14px',
          fontWeight: '300',
          letterSpacing: '0.5px',
          lineHeight: '16px',
        }}
      >
        {member.bio || "I'm a big fan of open source and Github."}
      </NormalPara>
    </SecondRow>

    <ThirdRow>
      {Object.keys(member.socials)
        .map((key) => ({
          href: member.socials[key],
          icon: socialIcons[key],
        }))
        .filter(({ href }) => href)
        .map(({ href, icon }) => (
          <a key={href} href={href} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon size='lg' icon={icon} color='#9FC3D4' />
          </a>
        ))}
    </ThirdRow>
  </CardContainer>
);

export default MemberCard;
