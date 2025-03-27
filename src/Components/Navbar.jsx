import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png"; 

export default function Navbar({ homeRef, aboutRef, contactRef, serviceRef, solutionRef }) {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ children, onClick }) => (
    <li
      onClick={onClick}
      className="relative group transition-all mr-10 duration-300 ease-in-out text-black hover:text-[#0877b1] cursor-pointer"
    >
      {children}
      <span className="absolute bottom-[-3px] left-0 w-0 h-0.5 bg-[#0877b1] group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </li>
  );

  const handleNavClick = (ref) => {
    if (ref.current) {
      const offset = 80; 
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-white fixed top-0 left-0 w-full flex justify-between items-center p-4 md:p-0 z-50 shadow-md">

      <img 
        src={logo} 
        className="h-[6vw] min-h-[50px] transition-transform duration-300 hover:scale-105 mb-[1%]" 
        alt="Logo" 
        style={{scale:'1.3', marginLeft:'20px', marginTop:'5px'}}
      />

      <nav className="hidden md:flex">
        <ul className="flex gap-8 text-lg text-black items-center" style={{fontSize:"20px"}}>
          <NavItem onClick={() => handleNavClick(homeRef)}>Home</NavItem>
          <NavItem onClick={() => handleNavClick(aboutRef)}>About</NavItem>
          <NavItem onClick={() => handleNavClick(serviceRef)}>Services</NavItem>
          <NavItem onClick={() => handleNavClick(solutionRef)}>Solutions</NavItem>
          <NavItem onClick={() => handleNavClick(contactRef)}>Contact Us</NavItem>
        </ul>
      </nav>


      <button 
        className="md:hidden relative z-50" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative w-7 h-5 transform transition duration-300 ease-in-out">
          <span 
            className={`absolute h-0.5 w-full bg-black transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 top-1/2 transform -translate-y-1/2' : 'top-0'
            }`}
          />
          <span 
            className={`absolute h-0.5 w-full bg-black top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span 
            className={`absolute h-0.5 w-full bg-black bottom-0 transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45 top-1/2 transform -translate-y-1/2' : 'bottom-0'
            }`}
          />
        </div>
      </button>

      <nav 
        className={`
          fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-all duration-500 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          flex items-center justify-center
        `}
      >
        <ul className="flex flex-col items-center gap-6 text-2xl text-black">
          <NavItem onClick={() => handleNavClick(homeRef)}>Home</NavItem>
          <NavItem onClick={() => handleNavClick(aboutRef)}>About</NavItem>
          <NavItem onClick={() => handleNavClick(serviceRef)}>Services</NavItem>
          <NavItem onClick={() => handleNavClick(solutionRef)}>Solutions</NavItem>
          <NavItem onClick={() => handleNavClick(contactRef)}>Contact Us</NavItem>
        </ul>
      </nav>
    </header>
  );
}




