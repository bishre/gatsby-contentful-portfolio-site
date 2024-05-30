import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../styles/tailwind.css";
import LanguageSwitcher from "./languageSwitcher";
import Footer from "./footer";
import ScrollToTopButton from "./scrollToTop";
import NavBar from "./navBar";
import MobileNavigation from "./mobileNavigation";
import useMobile from "../hooks/useMobile";

interface ScrollToTopButtonProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ScrollToTopButtonProps) => {
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
  return (
    <>
      <div className="relative">
        <div className='absolute w-full top-0 z-10 flex md:justify-end fixed'>
          {isMobile ? <MobileNavigation /> : <NavBar />}
        </div>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
