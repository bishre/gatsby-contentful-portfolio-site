import React from 'react'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import { PageProps, graphql } from 'gatsby'
import ComponentWrapper from '../../components/componentWrapper'
import { UIContextProvider } from '../../context/uiContext'

interface MarkdownProps {
  frontmatter: {
    title: string;
    description: string;
  }
  html: HTMLParagraphElement;
}

interface IndexPageProps extends PageProps {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownProps[];
    };
  };
}

const Index : React.FC<IndexPageProps> = ({ data }) => {
  const heroImage = {"file": { "url": "//images.ctfassets.net/jmqpmhd6e4pl/1Mm2UYwgshJErJPc4zJZ7x/3bb486e9a64c427617c3432f7cc3a191/hero-image-2.jpg"}}
  const response = data.allMarkdownRemark.nodes[1]
  return (
    <UIContextProvider>
    <Layout>
      <Hero
        title={response.frontmatter.title}
        description={response.frontmatter.description}
        heroImage={heroImage}
      />
      <ComponentWrapper>
        <div className='markdown' dangerouslySetInnerHTML={{__html: response.html}}></div>
      </ComponentWrapper>
    </Layout>
    </UIContextProvider>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
        }
        html
      }
    }
  }
`

export default Index