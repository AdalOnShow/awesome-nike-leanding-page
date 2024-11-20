import { headerLogo } from '../assets/images'
import { navLinks } from './../constants/index';
import { hamburger, close } from '../assets/icons'
import { useState } from 'react';

const NavItems = () => {
  return (
    <div>
      <ul className="flex-1 flex flex-col md:flex-row justify-center items-center relative gap-5 lg:gap-16 z-10">
        {navLinks.map((nav, i) => (
          <li key={i} className="">
            <a href={nav.href} className="font-montserrat leading-normal text-lg text-black md:text-slate-gray hover:text-slate-gray md:hover:text-gray-400" onClick={() => { }}>{nav.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}


const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <div className="flex justify-between max-container">
        <a href="/" className="">
          <img
            src={headerLogo}
            alt="logo" width={130}
            height={29}
            className=""
          />
        </a>

        <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none md:hidden flex" aria-label={"Toggle Menu"}>
          <img src={isOpen ? close : hamburger} alt="toggle" className="size-10" />
        </button>

        <nav className="hidden md:flex">
          <NavItems />
        </nav>

        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
      </div>

      <div className={`absolute left-0 right-0 mt-4 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto md:hidden block ${isOpen ? "max-h-screen" : "max-h-0"}`} onClick={toggleMenu}>
        <nav className="bg-coral-red/80 md:bg-none py-8 md:py-0">
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Nav