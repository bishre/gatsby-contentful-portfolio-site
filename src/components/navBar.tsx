import React from 'react'
import Navigation from './navigaion';
import LanguageSwitcher from './languageSwitcher';

const NavBar = () => {
  return (
    <div className='md:absolute md:right-0'>
      <ul className='col-start-2 flex flex-col md:flex-row justify-between p-4'>
        <Navigation />
        <LanguageSwitcher />
      </ul>
    </div>
  )
}

export default NavBar