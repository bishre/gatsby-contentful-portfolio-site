import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";
import Hero from "../components/hero";

import '../styles/tailwind.css';
import Education from "../components/education";
import Experience from "../components/experience";
import Projects from "../components/projects";
import About from "../components/about";
import Skills from "../components/skills";
import Timeline from "../components/timeline";
import AdditionalSkills from "../components/additionalSkills";

interface ContentfulHero {
  node: {
    id: string;
    title: string;
    description: {
      description: string;
    };
    heroImage: {
      file: {
        url: string;
      }
    }
  };
}

interface IndexPageProps extends PageProps {
  data: {
    allContentfulHero: {
      edges: ContentfulHero[];
    };
  };
}

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { allContentfulHero } = data;
  const heroEntries = allContentfulHero.edges;
  return (
    <Layout>
      <div className={styles.textCenter}>
        {heroEntries.map(({ node }) => (
          <div key={node.id}>
            <Hero
              title={node.title}
              description={node.description.description}
              heroImage={node.heroImage}
            />
          </div>
        ))}
        <About />
        <Projects />
        <Skills />
        <AdditionalSkills />
        <Timeline />
        {/* <Education />
        <Experience /> */}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulHero {
      edges {
        node {
          id
          title
          description {
            description
          }
          heroImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;