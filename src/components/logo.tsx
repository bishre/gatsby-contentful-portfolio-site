import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/bs_logo.png'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className="p-2 lg:p-4 fixed">
      <Link to="/">
        <img className="w-16 h-16 m-0 lg:w-20 lg:h-20" src={logo} alt="Site Logo" />
      </Link>
    </div>
  )
}

export default Logo