import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

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
    <div>
      <h2 className='text-3xl my-8'>Recent Projects</h2>
      <div className='grid grid-cols-2 gap-4 m-4'>
        {projectEntries.map(({ node }) => (
          <div className='p-4'>
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
    </div>
  )
}

export default Projects