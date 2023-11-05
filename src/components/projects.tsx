import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import ComponentWrapper from './componentWrapper'

type Props = {}

const Projects = (props: Props) => {
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
          <div className=''>
            <div className='rounded overflow-hidden group'>
              <img className='transition transition-transform scale-110 group-hover:scale-100' src={node.image.file.url} alt="" />
            </div>
            <h2>{node.title}</h2>
            <p className='text-xs'>{node.description}</p>
            <a href={node.link} target='_blank'>
              <button className='px-4 py-2 m-4 text-sm bg-purple-500 hover:bg-blue-700 transition duration-300 ease-in-out text-white rounded-full'>
                Go to site
              </button>
            </a>
          </div>
        ))}
      </div>
    </ComponentWrapper>
  )
}

export default Projects