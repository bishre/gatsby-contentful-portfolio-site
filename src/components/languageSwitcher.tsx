import { Link } from 'gatsby'
import React from 'react'

const LanguageSwitcher = () => {
  return (
    <>
      <li className='py-4 pl-12 pr-2 list-none'>
        <Link to='/'><span>EN</span></Link>
      </li>
      <li className='py-4 list-none'>
        <Link to='/finnish'><span>FI</span></Link>
      </li>
    </>
  )
}

export default LanguageSwitcher