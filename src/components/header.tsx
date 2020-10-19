import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 120px;
  position: fixed;
  width: 100%;
`;

const HeaderContent = styled.div`
  background-color: #9b3587;
  padding: 0 60px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

type Props = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
  <StyledHeader>
    <HeaderContent>{siteTitle}</HeaderContent>
  </StyledHeader>
);

export default Header;
