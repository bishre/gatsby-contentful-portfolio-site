import * as React from "react"
import { Link } from "gatsby"
import NavBar from "./navBar"

interface Props {
  siteTitle: string
}
const Header = ({ siteTitle }: Props) => (
  <header className="absolute top-0 z-10 grid grid-cols-2 w-full invisible">
    {siteTitle}
  </header>
)

export default Header
