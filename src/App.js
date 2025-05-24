import './index.css';

function App() {
  return (
    <div className="bg-amber-100 flexflex-col " >
      <div className='flex justify-center items-center flex-col h-screen ' onScroll={()=>console.log("scrolled ")} >
      <div className='flex-row flex absolute top-6  gap-2 font-medium '>
        <a href='#k'>About</a>
        <a href='#k'>Work</a>
        <a href='#k'>Resume</a>
      </div>
      <div className='bg-black absolute top-4 right-4 rounded-3xl hover:bg-gray-800 shadow shadow-red-400  '>
        <p className='text-amber-100 m-2 font-medium mr-4 ml-4 '>CONTACT ME</p>
      </div>
      <h1 onMouseOver={()=>console.log("hello")} className='text-7xl font-bold select-none' >R U P E S H</h1>
      <p className='text-black mt-3  font-thin hover:underline select-none' > Developer | Innovator | Dreamer </p>
      <p className='  absolute bottom-2 '>↑</p>
      </div>

      <div className='h-screen bg-black' id='k' >

      </div>

    </div>

  );
}

export default App;