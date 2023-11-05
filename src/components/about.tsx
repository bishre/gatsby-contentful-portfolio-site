import { BLOCKS } from '@contentful/rich-text-types'
import { graphql, useStaticQuery } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import ComponentWrapper from './componentWrapper'

type Props = {}

const About = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTextImageDescription {
        edges {
          node {
            title
            subTtile
            description {
              raw
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
    }`)
  const { allContentfulTextImageDescription } = data
  const aboutEntries = allContentfulTextImageDescription.edges

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className='text-sm my-4'>{children}</p>
    },
  }
  return (
    <ComponentWrapper>
      {aboutEntries.map(({ node }) => (
        <div className='lg:grid grid-cols-2 gap-4'>
          <div className='w-40 h-40 lg:w-80 lg:h-80 mb-4 mx-auto rounded-full overflow-hidden'>
            <img className='' src={node.image.file.url} alt="" />
          </div>
          <div className='my-auto'>
            <h2 className='text-xl'>{node.title}</h2>
            <h3 className='text-sm'>{node.subTtile}</h3>
            {renderRichText(node.description, options)}
          </div>
        </div>
      ))}
    </ComponentWrapper>
  )
}

export default About