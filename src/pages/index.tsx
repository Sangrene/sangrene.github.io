import React, { useContext } from "react";
import { Link, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section";
import Intro from "../components/intro";
import "typeface-josefin-sans";
import "typeface-inter";
import { theme } from "../theme";
import Perso from "../components/perso";
import Skills from "../components/skills";
import Experiences from "../components/experiences";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section fullWidth backgroundColor="#FFFFFF">
        <Intro />
      </Section>
      <Section backgroundColor={theme.color.perso.background}>
        <Perso />
      </Section>
      <Section backgroundColor={theme.color.skills.background}>
        <Skills />
      </Section>
      <Section backgroundColor={theme.color.experiences.background} fullWidth>
        <Experiences />
      </Section>
      <Section short backgroundColor={theme.color.contact.background} fullWidth>
        Contact
      </Section>
    </Layout>
  );
};

export default IndexPage;
