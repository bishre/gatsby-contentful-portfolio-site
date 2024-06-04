import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Logo from "../components/logo"

const SuccessPage: React.FC = () => (
  <>
    <Logo />
    <div className="flex flex-col items-center h-screen pt-32 px-4">
      <h2>Success!</h2>
      <p>Your message has been sent successfully.</p>
      <Link to="/">
        <button className="mt-4 p-2 border hover:bg-purple-500">Go back home</button>
      </Link>
    </div>
  </>
)

export default SuccessPage
