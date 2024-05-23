import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../styles/tailwind.css";
import LanguageSwitcher from "./languageSwitcher";
import Footer from "./footer";
import ScrollToTopButton from "./scrollToTop";
import NavBar from "./navBar";

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="relative">
        <NavBar />
        <ScrollToTopButton />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
