import * as React from "react"
import Header from "./header"
import "./layout.css"
import "../styles/tailwind.css";
import Footer from "./footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
