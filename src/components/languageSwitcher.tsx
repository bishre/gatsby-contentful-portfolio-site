import { Link } from 'gatsby'
import React from 'react'

const LanguageSwitcher = () => {
  return (
    <ul className='flex flex-row'>
      <li className='py-4 md:pl-12 pr-2 list-none'>
        <Link to='/'><span>EN</span></Link>
      </li>
      <li className='py-4 list-none'>
        <Link to='/finnish'><span>FI</span></Link>
      </li>
    </ul>
  )
}

export default LanguageSwitcher