import { graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'

interface MenuItem {
  title: string;
  slug: string;
}

interface NavigationData {
  allContentfulMenuItem: {
    nodes: MenuItem[];
  }
}

const Navigation = () => {
  const data = useStaticQuery<NavigationData>(graphql`
    query {
      allContentfulMenuItem(sort: { fields: order, order: ASC }) {
        nodes {
          title
          slug
          order
        }
      }
    }
  `)

  const menuItems = data.allContentfulMenuItem.nodes
  return (
    <>
      {
        menuItems.map(item => (
          <li className='p-4'>
            <AnchorLink to={`${item.slug}`} title={item.title}>
              <span>{item.title}</span>
            </AnchorLink>
          </li>
        ))
      }
    </>
  )
}

export default Navigation