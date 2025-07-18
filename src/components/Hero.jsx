import React from 'react'

const Hero = () => {
  return (
    <div className='w-sceen h-screen'>
      <div className=' relative bg-zinc-300 h-full'>
        {/* <img src="" alt="" /> */}
      </div>
      <div className='absolute top-3/4 w-screen sm  flex text-black z-15  justify-between'>
        <h1 className='uppercase text-3xl -rotate-90 '>shivkripa</h1>
        <h1 className=' rotate-90 text-3xl'>travels </h1>
      </div>

      <div  className='w-10 h-full bg-black z-15 absolute top-0 left-1/3'/>
<div className=' absolute  top-50 flex sm:left-80 left-50 md:left-150'>
      <h1 className=' text-black font-[1000] font-Title  lg:text-7xl uppercase'>shiv kripa <br />tour and travels</h1>
</div>
     
    </div>
  )
}

export default Hero
