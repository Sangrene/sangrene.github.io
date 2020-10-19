/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import "./layout.css";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";

const MainContainer = styled.main`
  display: flex;
  max-width: 100vw;
  flex-wrap: wrap;
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <MainContainer>{children}</MainContainer>
    </ThemeProvider>
  );
};

export default Layout;
