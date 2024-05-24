import { graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React, { useContext } from 'react'
import useMobile from '../hooks/useMobile';
import { UIContext } from '../context/uiContext';

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
  const { isOpen, setIsOpen } = useContext(UIContext)

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
          <li className='p-0 md:p-4' onClick={() => setIsOpen(false)}>
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