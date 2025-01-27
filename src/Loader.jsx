import React from 'react'

const Loader = () => {
  return (
    /* From Uiverse.io by yohohopizza */ 
    <main className="w-screen z-100 h-screen flex justify-center items-center bg-viveka-back-light">
<div className="flex flex-row gap-2">
  <div className="w-4 h-4 rounded-full bg-viveka-theme animate-bounce"></div>
  <div
    className="w-4 h-4 rounded-full bg-viveka-theme animate-bounce [animation-delay:-.3s]"
  ></div>
  <div
    className="w-4 h-4 rounded-full bg-viveka-theme animate-bounce [animation-delay:-.5s]"
  ></div>
</div>
</main>
  )
}

export default Loader