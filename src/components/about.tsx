import { BLOCKS } from '@contentful/rich-text-types'
import { graphql, useStaticQuery } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import ComponentWrapper from './componentWrapper'
import { useInView } from 'react-intersection-observer';

type Props = {}

const About = (props: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2
  });
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
      [BLOCKS.PARAGRAPH]: (node, children) => <p className='text-sm md:text-xl my-2'>{children}</p>
    },
  }
  return (
    <ComponentWrapper>
      {aboutEntries.map(({ node }) => (
        <div ref={ref} className={`lg:grid grid-cols-2 gap-4 ${inView ? 'transform translate-y-0 transition-all opacity-100' : 'transform translate-y-1/4 opacity-0'} duration-500 ease-in-out`}>
          <div className='w-40 h-40 lg:w-80 lg:h-80 mb-4 mx-auto rounded-full overflow-hidden'>
            <img className='transition transform translate-y-0 hover:-translate-y-4 hover:cursor-pointer' src={node.image.file.url} alt="" />
          </div>
          <div className='my-auto flex flex-col items-center'>
            <h2 className='text-xl md:text-2xl lg:text-4xl'>{node.title}</h2>
            <h3 className='text-sm md:text-xl my-4'>{node.subTtile}</h3>
            {renderRichText(node.description, options)}
          </div>
        </div>
      ))}
    </ComponentWrapper>
  )
}

export default About