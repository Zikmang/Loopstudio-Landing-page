import {useEffect, useState } from "react"
import logo from "../images/logo.svg"
import hamburger from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Navbar */}
      <nav aria-label="Main navigation" className={`relative z-40 px-6 py-8 md:px-16 lg:px-32 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur": "bg-transparent"}`}>
        <div className="flex items-center justify-between">
          <img src={logo} alt="Loopstudios logo" className="w-32 md:w-40" />

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 md:gap-8 text-white text-sm md:text-base">
            {['About', 'Careers', 'Products', 'Support'].map(item => (
              <li
                key={item}
                className="cursor-pointer relative after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <img src={hamburger} alt="Open menu" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="
            fixed inset-0 z-50
            bg-black
            flex flex-col
            px-8
            pt-8
            uppercase
            text-white
            text-2xl
            tracking-wide
          "
        >
          {/* Close button */}
          <div className="flex justify-end mb-12">
            <button onClick={() => setOpen(false)}>
              <img src={close} alt="Close menu" />
            </button>
          </div>

          {/* Menu items */}
          <div className="flex flex-col gap-6">
            {['About', 'Careers', 'Products', 'Support'].map(item => (
              <a key={item} className="cursor-pointer">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
