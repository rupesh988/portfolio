import './index.css';
import About from "./components/modules/About";
import Contact from "./components/modules/Contact";
import Projects from "./components/modules/projects";
import Skill from "./components/modules/Skills";
import {useEffect, useState} from 'react'

function App() {

    const [fontSize, setFontSize] = useState(48); // default base

  // Helper: get base size from screen width
  const getBaseSize = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 72; // md:text-7xl
    if (width >= 640) return 60;  // sm:text-5xl
    return 48;                    // text-4xl
  };



  useEffect(() => {
    const baseSize = getBaseSize();

    const handleScroll = () => {
      const dynamicSize = baseSize + window.scrollY;
      setFontSize(Math.min(dynamicSize, baseSize + 60)); // cap to avoid too large
    };

    // Call once to initialize
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // recheck on resize
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);



  return (
    <div className="bg-white flex flex-col scroll-smooth">


      <div className='flex justify-center items-center flex-col h-screen'>
        <div className='flex-row flex absolute top-6 gap-4 font-medium'>
          <a href='#about' className='hover:underline'>About</a>
          <a href='#work' className='hover:underline'>Work</a>
          <a href='https://github.com/rupesh988/portfolio/blob/master/Rupeshres.pdf'  className='hover:underline'>Resume</a>
        </div>

        <a href="#con">
          <div className='bg-black fixed bottom-4 right-4 md:top-4 md:right-4 md:bottom-auto rounded-3xl hover:bg-gray-800 shadow shadow-red-400'>
            <p className='text-amber-50 m-2 font-medium mr-4 ml-4'>CONTACT ME</p>
          </div>
        </a>


        <h1
      onMouseOver={() => console.log("hello")}
      style={{
        fontSize: `${fontSize}px`,
        fontWeight: 'bold',
        userSelect: 'none',
        transition: 'font-size 0.1s ease-out',
      }}>R U P E S H</h1>
        <p className='text-black mt-3 font-thin hover:underline select-none'>Developer | Innovator | Dreamer</p>
        <p className='absolute bottom-2'>↑</p>
      </div>

      <div id="about">
        <About />
      </div>

      <div id="work">
        <Projects />
      </div>

      <Skill />
      <div id="con"><Contact  /></div>
      
    </div>
  );
}

export default App;
