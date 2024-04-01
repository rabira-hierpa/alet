import React from "react"
import { Link } from "gatsby"
import AletLogo from "../images/alet-logo.jpeg"

const Header = ({ siteTitle }) => {
  return (
    <header className="lg:px-16 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/" className="flex align-center text-lg font-semibold">
          <img
            src={AletLogo}
            width="55"
            height="55"
            className="p-2"
            alt="Alet Logo"
          />
          <div className="mt-3 text-primary">Alet Trading</div>
        </Link>
      </div>
      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
            <li className="py-2 lg:py-0 ">
              <Link
                className="text-primary hover:pb-4 hover:border-b-4 hover:border-secondary"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="py-2 lg:py-0 ">
              <Link
                className="text-primary hover:pb-4 hover:border-b-4 hover:border-secondary"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="py-2 lg:py-0 ">
              <Link
                className="text-primary hover:pb-4 hover:border-b-4 hover:border-secondary"
                to="/contact"
              >
                Contact
              </Link>
            </li>

            <li className="py-2 lg:py-0 ">
              <Link
                className="text-primary hover:pb-4 hover:border-b-4 hover:border-secondary"
                to="/my-journey"
              >
                Service
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
