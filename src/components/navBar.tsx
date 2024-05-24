import React from 'react'
import Navigation from './navigaion';
import LanguageSwitcher from './languageSwitcher';

const NavBar = () => {
  return (
    <ul className='col-start-2 flex flex-col md:flex-row justify-between p-4'>
      <Navigation />
      <LanguageSwitcher />
    </ul>
  )
}

export default NavBar