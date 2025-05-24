import './index.css';
import About from "./components/modules/About";
import Contact from "./components/modules/Contact";
import Projects from "./components/modules/projects";
import Skill from "./components/modules/Skills";

function App() {
  return (
    <div className="bg-green-100 flex flex-col scroll-smooth">

      {/* NAVIGATION BAR */}
      <div className='flex justify-center items-center flex-col h-screen'>
        <div className='flex-row flex absolute top-6 gap-4 font-medium'>
          <a href='#about' className='hover:underline'>About</a>
          <a href='#work' className='hover:underline'>Work</a>
          <a href='/resume.pdf' download className='hover:underline'>Resume</a>
        </div>

        {/* CONTACT BUTTON */}
        <a href="#con"><div className='bg-black absolute top-4 right-4 rounded-3xl hover:bg-gray-800 shadow shadow-red-400'>
          <p className='text-amber-50 m-2 font-medium mr-4 ml-4'>CONTACT ME</p>
        </div></a>

        {/* TITLE SECTION */}
        <h1 onMouseOver={() => console.log("hello")} className='text-7xl font-bold select-none'>R U P E S H</h1>
        <p className='text-black mt-3 font-thin hover:underline select-none'>Developer | Innovator | Dreamer</p>
        <p className='absolute bottom-2'>↑</p>
      </div>

      {/* SECTION COMPONENTS WITH IDS */}
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
