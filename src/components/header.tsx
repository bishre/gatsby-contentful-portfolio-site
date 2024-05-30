import * as React from "react"
import { Link } from "gatsby"
import logo from '../images/bs_logo.png'

interface Props {
  siteTitle: string
}
const Header = ({ siteTitle }: Props) => (
  <header className="absolute top-0 z-10 grid grid-cols-2 w-full">
    <h1 className="hidden">{siteTitle}</h1>
    <div className="p-2 lg:p-4 fixed">
      <Link to="/">
        <img className="w-16 h-16 m-0 lg:w-20 lg:h-20" src={logo} alt="Site Logo" />
      </Link>
    </div>
  </header>
)

export default Header
