/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
// src/layouts/Layout.js or in a global stylesheet
import "../styles/tailwind.css";
import LanguageSwitcher from "./languageSwitcher";
import Footer from "./footer";


const Layout = ({ children }) => {
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
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div className="relative">
        <LanguageSwitcher />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
