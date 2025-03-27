import { useState } from "react";
import logo from "../assets/logo.png"; 

export default function Navbar({ homeRef, aboutRef, contactRef, serviceRef, solutionRef }) {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ children, onClick }) => (
    <li
      onClick={onClick}
      className="relative group transition-all duration-300 ease-in-out text-black hover:text-[#0877b1] cursor-pointer"
    >
      {children}
      <span className="absolute bottom-[-3px] left-0 w-0 h-0.5 bg-[#0877b1] group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </li>
  );

  const handleNavClick = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 80, behavior: "smooth" });
      setIsOpen(false);
      document.body.style.overflow = "auto"; 
    }
  };

  return (
    <header className="bg-white fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 md:py-4 shadow-md z-50">
      
      {/* Logo */}
      <img 
        src={logo} 
        className="h-12 md:h-16 transition-transform duration-300 hover:scale-110" 
        alt="Logo"
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6 md:space-x-10 text-lg text-black items-center">
          <NavItem onClick={() => handleNavClick(homeRef)}>Home</NavItem>
          <NavItem onClick={() => handleNavClick(aboutRef)}>About</NavItem>
          <NavItem onClick={() => handleNavClick(serviceRef)}>Services</NavItem>
          <NavItem onClick={() => handleNavClick(solutionRef)}>Solutions</NavItem>
          <NavItem onClick={() => handleNavClick(contactRef)}>Contact</NavItem>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden relative z-50"
        aria-label="Toggle Menu"
        onClick={() => {
          setIsOpen(!isOpen);
          document.body.style.overflow = isOpen ? "auto" : "hidden"; // Prevent scrolling when menu is open
        }}
      >
        <div className="relative w-7 h-5">
          <span className={`absolute h-0.5 w-full bg-black transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 top-2.5' : 'top-0'}`} />
          <span className={`absolute h-0.5 w-full bg-black top-2.5 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`absolute h-0.5 w-full bg-black transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 top-2.5' : 'bottom-0'}`} />
        </div>
      </button>

      {/* Mobile Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 flex items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full md:hidden'}`}
      >
        <ul className="flex flex-col items-center gap-6 text-2xl text-black">
          <NavItem onClick={() => handleNavClick(homeRef)}>Home</NavItem>
          <NavItem onClick={() => handleNavClick(aboutRef)}>About</NavItem>
          <NavItem onClick={() => handleNavClick(serviceRef)}>Services</NavItem>
          <NavItem onClick={() => handleNavClick(solutionRef)}>Solutions</NavItem>
          <NavItem onClick={() => handleNavClick(contactRef)}>Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
}




