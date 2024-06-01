import { Link } from 'gatsby'
import React, { useContext } from 'react'
import { UIContext, UIContextType } from '../context/uiContext'

const LanguageSwitcher = () => {
  const uiContext = useContext(UIContext) as UIContextType
  if (!uiContext) {
    return null
  }
  const { toggleOpen } = uiContext
  return (
    <ul className='flex flex-row'>
      <li onClick={toggleOpen} className='py-4 md:pl-12 pr-2 list-none'>
        <Link to='/' activeStyle={activeLinkStyle}><span>EN</span></Link>
      </li>
      <li onClick={toggleOpen} className='py-4 list-none'>
        <Link to='/finnish' activeStyle={activeLinkStyle}><span>FI</span></Link>
      </li>
    </ul>
  )
}

const activeLinkStyle = {
  color: '#A855F7'
}

export default LanguageSwitcher