import { Link } from 'gatsby'
import React, { useContext } from 'react'
import { UIContext, UIContextType } from '../context/uiContext'

const LanguageSwitcher = () => {
  const { toggleOpen } = useContext(UIContext) as UIContextType
  return (
    <ul className='flex flex-row'>
      <li onClick={toggleOpen} className='py-4 md:pl-12 pr-2 list-none'>
        <Link to='/'><span>EN</span></Link>
      </li>
      <li onClick={toggleOpen} className='py-4 list-none'>
        <Link to='/finnish'><span>FI</span></Link>
      </li>
    </ul>
  )
}

export default LanguageSwitcher