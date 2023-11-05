import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <ul className='col-start-2 flex justify-between p-4'>
      <li>
        <AnchorLink to='/' title='Home'>
          <span>Home</span>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to='#about-me' title='About me'>
          <span>About me</span>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to='#contact-me' title='Contact me'>
          <span>Contact me</span>
        </AnchorLink>
      </li>
    </ul>
  )
}

export default NavBar