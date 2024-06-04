import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import ComponentWrapper from './componentWrapper'
import { useInView } from 'react-intersection-observer'
import Project from './project'

type Props = {}

const Projects = (props: Props) => {
  // const [ref, inView] = useInView({
  //   triggerOnce: true, // Trigger animation only once
  //   threshold: 1
  // });
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
      edges {
        node {
          title
          description
          link
          image {
            file {
              url
            }
          }
        }
      }
    }
    }
  `)
  const { allContentfulProject } = data
  const projectEntries = allContentfulProject.edges
  return (
    <ComponentWrapper>
      <h2 id="work" className='text-xl md:text-2xl lg:text-4xl my-12'>Projects & Websites</h2>
      <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8'>
      {projectEntries.map(({ node }, i) => (
        <li key={i}>
          <Project node={node}/>
        </li>
      ))}
      </ul>
    </ComponentWrapper>
  )
}

export default Projects