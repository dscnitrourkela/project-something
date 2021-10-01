/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import MemberCard from './shared/MemberCard';

const BackgroundImageContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;

  background: url(https://res.cloudinary.com/dscnitrourkela/image/upload/v1632299484/Gitwars/ixzchacq4xzxyqtoyfct.png);
  object-fit: cover;
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const CommunityMemberGrid = () => {
  const members = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <BackgroundImageContainer>
      <GridContainer>
        {members.map((number) => (
          <MemberCard key={number} />
        ))}
      </GridContainer>
    </BackgroundImageContainer>
  );
};

export default CommunityMemberGrid;
