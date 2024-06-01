import { graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React, { useContext } from 'react'
import { UIContext, UIContextType } from '../context/uiContext';

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
  const uiContext = useContext(UIContext) as UIContextType
  if (!uiContext) {
    return null
  }

  const { toggleOpen } = uiContext
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
        menuItems.map((item, i) => (
          <li key={i} className='p-0 md:p-4 group' onClick={toggleOpen}>
            <AnchorLink to={`${item.slug}`} title={item.title}>
              <span className='transition transition-all group-hover:text-purple-500'>{item.title}</span>
            </AnchorLink>
          </li>
        ))
      }
    </>
  )
}

export default Navigation