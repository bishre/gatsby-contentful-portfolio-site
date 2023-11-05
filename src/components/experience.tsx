import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

type Props = {}

const Experience = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulExperience {
        edges {
          node {
            title
          }
        }
      }
    }
  `)
  const { allContentfulExperience } = data
  const allExperienceEntries = allContentfulExperience.edges
  return (
    <div>
      {allExperienceEntries.map(({ node }) => (
        <div>
          <h2>{node.title}</h2>
        </div>
      )
      )}
    </div>
  )
}

export default Experience