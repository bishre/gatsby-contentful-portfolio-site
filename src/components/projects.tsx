import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import ComponentWrapper from './componentWrapper'
import { useInView } from 'react-intersection-observer'
import Project from './project'

type Props = {}

const Projects = (props: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 1
  });
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
      <h2 className='text-3xl my-12'>Recent Projects</h2>
      <div className='grid grid-cols-2 gap-4'>
        {projectEntries.map(({ node }) => (
          <Project node={node}/>
        ))}
      </div>
    </ComponentWrapper>
  )
}

export default Projects