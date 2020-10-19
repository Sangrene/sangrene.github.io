import React from "react";
import { styled } from "../theme";

type Props = {
  backgroundColor: string;
  fullWidth?: boolean;
  short?: boolean;
};

const Container = styled.section<Props>`
  width: ${(props) => (props.fullWidth ? "100vw" : "50vw")};
  height: ${(props) => (props.short ? "50vh" : "100vh")};
  background-color: ${(props) => props.backgroundColor};
  @media ${({ theme }) => theme.breakpoint.mobile} {
    width: 100vw;
  }
`;

const Section: React.FC<Props> = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Section;
