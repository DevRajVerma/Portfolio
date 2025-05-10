"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="fixed top-0 w-full bg-[#333] py-4 z-[1000]">
      <nav className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <div className="text-white text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-[60px] left-0 w-full md:w-auto bg-[#333] md:bg-transparent py-2.5 md:py-0 space-y-2.5 md:space-y-0 md:space-x-5`}
        >
          <li>
            <a
              href="#home"
              onClick={toggleMenu}
              className="text-white hover:text-[#ffd700] transition-colors duration-300 px-5 md:px-0 py-2.5 md:py-0 block md:inline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#case-studies"
              onClick={toggleMenu}
              className="text-white hover:text-[#ffd700] transition-colors duration-300 px-5 md:px-0 py-2.5 md:py-0 block md:inline"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={toggleMenu}
              className="text-white hover:text-[#ffd700] transition-colors duration-300 px-5 md:px-0 py-2.5 md:py-0 block md:inline"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="text-white hover:text-[#ffd700] transition-colors duration-300 px-5 md:px-0 py-2.5 md:py-0 block md:inline"
            >
              Get In Touch
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/dev-raj-verma-310ab21b4/"
            className="text-white hover:text-[#ffd700] transition-colors duration-300 text-xl ml-4"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/Dev91854734/"
            className="text-white hover:text-[#ffd700] transition-colors duration-300 text-xl ml-4"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/dev__raj_verma/"
            className="text-white hover:text-[#ffd700] transition-colors duration-300 text-xl ml-4"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
