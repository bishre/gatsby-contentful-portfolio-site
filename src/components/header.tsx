import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import useMobile from "../hooks/useMobile"
import MobileNavigation from "./mobileNavigation"
import NavBar from "./navBar"
import Logo from "./logo"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const isMobile = useMobile()
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
  <header className="relative z-10 w-full">
    <h1 className="hidden">{siteTitle}</h1>
    <Logo />
    {isMobile ? <MobileNavigation /> : <NavBar />}
  </header>
)}

export default Header
