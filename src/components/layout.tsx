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
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollToTopButton from "./scrollToTop";

interface ScrollToTopButtonProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ScrollToTopButtonProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
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
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="relative">
        <LanguageSwitcher />
        <ScrollToTopButton />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
