import * as React from "react"
import { Link } from "gatsby"
import NavBar from "./navBar"
import Logo from "../icons/logo"

interface Props {
  siteTitle: string
}
const Header = ({ siteTitle }: Props) => (
  <header className="absolute top-0 z-10 grid grid-cols-2 w-full">
    <h1 className="hidden">{siteTitle}</h1>
    <Logo className="p-4" />
  </header>
)

export default Header
