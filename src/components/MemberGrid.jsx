/* eslint-disable max-len */
import React from 'react';

// Libraries
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

// Components
import MemberCard from './shared/MemberCard';

const BackgroundImageContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;

  background: url(https://res.cloudinary.com/dscnitrourkela/image/upload/v1632299484/Gitwars/ixzchacq4xzxyqtoyfct.png);
  object-fit: cover;

  @media (min-width: 1150px) {
    grid-column: 2/4;
    grid-row: 1/4;
    border-radius: 24px;
    width: 100%;
    height: 90vh;
  }
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

  @media (min-width: 1150px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
`;

const CommunityMemberGrid = () => {
  const {
    members: { edges: members },
  } = useStaticQuery(graphql`
    query MyQuery {
      members: allMdx(filter: { fileAbsolutePath: { regex: "/members/" } }) {
        edges {
          node {
            frontmatter {
              github
              linkedin
              portfolio
              shortDescription
              title
              twitter
            }
          }
        }
      }
    }
  `);

  return (
    <BackgroundImageContainer>
      <GridContainer>
        {members.map(({ node: { frontmatter: member } }) => (
          <MemberCard key={member.github} member={member} />
        ))}
      </GridContainer>
    </BackgroundImageContainer>
  );
};

export default CommunityMemberGrid;
