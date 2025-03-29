
import React from "react";
import Hero from "../Components/Hero";
import Contact from "../Components/Contact";
import Strength from "../Components/Strength";
import SectionsLine from "../Components/SectionsLine";
import Services from "../Components/Services";
import LogoGrid from "../Components/LogoGrid";
import EmpoweredPerformance from "../Components/empoweredPerformance";
import TeamSolutions from "../Components/teamSolutions";
import AboutUs from "../Components/AboutUsSection";
import KeyDifferentiators from "../Components/KeyDifferetiators";
import LeaderShipCoachingAndDevelopment from "../Components/LeaderShipCoachingAndDevelopment";
import IndustriesWeServed from "../Components/Industries-We-Served";
import ContactUs from "../Components/Contact-Us";
import HowWePlay from "../Components/HowWePlay";
import leftRibbon from "../assets/left-ribbin.png"; 
import FormFooter from "../Components/FormFooter"
import Footeradverdant from "../Components/footeradverdant"
const Home = ({ homeRef, aboutRef, contactRef, serviceRef, solutionRef }) => {
  return (
    <div>
      {[
        { ref: homeRef, component: <><Hero /><Contact /></> },
        { component: <><SectionsLine /><Strength /></> },
        { component: <><SectionsLine /><HowWePlay /></> },
        { component: <><SectionsLine /><KeyDifferentiators /></> },
        { ref: serviceRef, component: <><SectionsLine /><Services /></> },
        { component: <><SectionsLine /><EmpoweredPerformance /></> },
        { component: <><SectionsLine /><LeaderShipCoachingAndDevelopment /></> },
        { ref: solutionRef, component: <><SectionsLine /><TeamSolutions /></> },
        { component: <><SectionsLine /><IndustriesWeServed /></> },
        { component: <><SectionsLine /><LogoGrid /></> },
        { ref: aboutRef, component: <><SectionsLine /><AboutUs /></> },
        { ref: contactRef, component: <><SectionsLine /><ContactUs /></> },
        { component: <><FormFooter /></> },
      ].map(({ ref, component }, index) => (
        <section key={index} ref={ref} className="flex items-stretch">

          <div className="w-[8vw] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <img 
                src={leftRibbon} 
                className="w-full h-full object-cover" 
                alt="Left Ribbon" 
                style={{ clipPath: 'inset(0 0 0 0)' }} 
              />
            </div>
          </div>

          <div className="w-[92%]">
            {component}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
