import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Techonologies from "./Components/Techonologies";
import Intern from "./Components/Intern";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Typewriter from 'typewriter-effect';

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set showContent to true after the typewriter finishes
    setTimeout(() => setShowContent(true), 8000); // Adjusted time based on typewriter speed and strings length
  }, []);

  return (
    <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full bg-black">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-black"></div>
      </div>

      <div className="container mx-auto px-8 text-white text-center">
        {!showContent && (
          <Typewriter className='text-center '
            options={{
              strings: ['My name is ', 'I am a FrontEnd Developer'],
              typeSpeed: 70,
              delayMs: 500, // Adjust delay between each string
              autoStart: true,
              loop: false, // Do not loop the effect
            }}
            onFinishedTyping={() => setShowContent(true)} // Trigger to show content after typing finishes
          />
        )}

        {showContent && (
          <>
            <Navbar />
            <Hero />
            <About />
            <Techonologies />
            <Intern />
            <Projects />
            <Contact />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
