import React, { useRef } from 'react';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

const App = () => {

  const appRefs = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    contactRef: useRef(null),
    serviceRef: useRef(null),
    solutionRef: useRef(null),
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>

      <Navbar scrollToSection={scrollToSection} {...appRefs} />

      <div className="flex w-full">
        <div className="w-[96%]">
          <Home className="font-poppins" {...appRefs} />
        </div>
      </div>
    </div>
  );
};

export default App;


