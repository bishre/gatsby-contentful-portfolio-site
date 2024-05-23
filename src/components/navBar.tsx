import React from 'react'
import Navigation from './navigaion';
import LanguageSwitcher from './languageSwitcher';

const NavBar = () => {
  return (
    <div className='absolute top-20 z-10 right-20 flex'>
      <ul className='col-start-2 flex justify-between p-4'>
        <Navigation />
        <LanguageSwitcher />
      </ul>
    </div>
  )
}

export default NavBar