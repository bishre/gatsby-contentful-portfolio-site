import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Logo from "../components/logo"

const SuccessPage: React.FC = () => (
  <>
    <Logo />
    <div className="h-screen pt-32 px-4 text-center">
      <h1>Success!</h1>
      <p>Your message has been sent successfully.</p>
      <Link to="/">
        <button className="mt-4 p-2 border hover:bg-purple-500">Go back home</button>
      </Link>
    </div>
  </>
)

export default SuccessPage
