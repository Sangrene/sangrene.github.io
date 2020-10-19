import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { styled } from "../theme";
import Hugo from "../images/Hugo.gif";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    flex-direction: column;
  }
`;

const Avatar = styled.img`
  width: 80%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Title = styled.h1`
  text-align: center;
  b {
    font-size: 3rem;
    color: ${({ theme }) => theme.color.intro.main};
  }
`;

const Intro = () => {
  return (
    <Container>
      <Column>
        <Avatar src={Hugo} />
      </Column>
      <Column>
        <Title>
          <b>Hugo Laplace-Builhe</b>
          <br />
          <i>CTO - Lead tech - Engineer</i>
        </Title>
      </Column>
    </Container>
  );
};

export default Intro;
