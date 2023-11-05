import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'
import ComponentWrapper from './componentWrapper'

type Props = {}

const Education = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEducation {
      edges {
        node {
          description {
            raw
          }
          title
        }
      }
    }
    }
  `)
  const { allContentfulEducation } = data
  const educationEntries = allContentfulEducation.edges
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
    },
  }
  return (
    <ComponentWrapper>
      {educationEntries.map(({ node }) =>
         (
          <div key={node.id} className=''>
            <h2>{node.title}</h2>
            {renderRichText(node.description, options)}
          </div>
        ))}
    </ComponentWrapper>
  )
}

export default Education