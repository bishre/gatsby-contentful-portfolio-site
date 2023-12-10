import { Link } from 'gatsby'
import React from 'react'

type Props = {}

const LanguageSwitcher = (props: Props) => {
  return (
    <div className='absolute top-20 z-10 right-20'>
        <Link to='/'><span className='p-4'>EN</span></Link>
        <Link to='/finnish'><span>FI</span></Link>
    </div>
  )
}

export default LanguageSwitcher