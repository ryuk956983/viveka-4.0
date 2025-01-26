import React from 'react'
import About from './Components/About'

const AboutRoute = () => {
  return (
    
    <main className='mt-30 max-md:mt-28 flex flex-col p-4 items-center max-md:justify-start '>

      <h1 className='text-7xl border-r-4 border-viveka-theme p-2 font-bold w-fit'>About</h1>

      <div>
        <About/>
      </div>
    </main>
  )
}

export default AboutRoute