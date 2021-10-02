/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';

// Libraries
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Octokit } from '@octokit/core';

// Components
import MemberCard from './shared/MemberCard';

const octokit = new Octokit({ auth: process.env.GATSBY_GITHUB_TOKEN });

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
  const [members, setMembers] = useState([]);

  const {
    members: { edges: memberList },
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

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Construct a query containing all the members required details
        let query = ' ';
        memberList.forEach(({ node: { frontmatter: m } }) => {
          query += `\n ${m.github}: user(login: "${m.github}") {
            name
            bio
            avatarUrl
            organizations {
              totalCount
            }
            contributionsCollection {
              totalRepositoryContributions
              contributionCalendar {
                totalContributions
              }
            }
          }`;
        });
        const finalQuery = `query{ ${query} \n}`;

        // Use graphql users query to fetch all the required data
        // Modify the received data as per our data structred
        // Update the state after completing the modifciations.
        const data = await octokit.graphql(finalQuery);
        const membersArray = Object.keys(data).map((key, index) => {
          const {
            name,
            bio,
            avatarUrl,
            organizations: { totalCount: orgCount },
            contributionsCollection: {
              totalRepositoryContributions: repoCount,
              contributionCalendar: { totalContributions: commitCount },
            },
          } = data[key];

          const {
            node: {
              frontmatter: { github, linkedin, twitter, portfolio, shortDescription },
            },
          } = memberList[index];

          return {
            name,
            img: avatarUrl,
            bio: shortDescription || bio,
            stats: {
              orgs: orgCount,
              commits: commitCount,
              repos: repoCount,
            },
            socials: {
              twitter,
              linkedin,
              github,
              portfolio,
            },
          };
        });
        setMembers(membersArray);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, [memberList]);

  return (
    <BackgroundImageContainer>
      <GridContainer>
        {members.map((member) => (
          <MemberCard key={member.socials.github} member={member} />
        ))}
      </GridContainer>
    </BackgroundImageContainer>
  );
};

export default CommunityMemberGrid;
