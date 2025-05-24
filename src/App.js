import React, { useEffect } from 'react'

export default function App() {
  useEffect(()=>{
    const ch = () => console.log(window.scrollY)
    window.addEventListener('scrollend',ch)
    return () => window.removeEventListener('volumechange',ch) 
  },[])
  return (
    <div className='bg-yellow-50 h-screen w-screen overflow-x-scroll scroll-smooth snap-y snap-mandatory '>
        <section className='bg-green-50 h-screen w-screen snap-start justify-center ' >
          <p>hello</p>
        </section>
        <section className='bg-green-100 h-screen w-screen snap-start justify-center ' >
          <p>hello</p>
        </section>
        <section className='bg-green-200 h-screen w-screen snap-start justify-center ' >
          <p>hello</p>
        </section>
        
    </div>
  )
}
