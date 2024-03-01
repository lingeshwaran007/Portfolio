import React from 'react'
import Image from 'next/image'
import linga from "./lingaimg.png"

const intro = () => {
  return (
    <div className='flex justify-between mx-24 p-12  h-[650px] '>
      <div className='flex text-[#FEECE2] gap-8 pt-16 w-[40%] flex-col '>
        <div className='text-[#FEECE2] font-bold text-5xl gap-5 flex flex-col'>
          <h2>Hello, I'm</h2>
          <h2>Lingesh a Coder,</h2>
          <h3>and Developer</h3>
        </div>
        <div>A dedicated Developer with a passion for creating digital experiences that not only look beautiful but also funtion seemlessly.</div>
        <button className='text-black w-32 h-12 rounded-3xl bg-[#aeb8fe] hover:scale-110  transition duration-500'>Get Started</button>
      </div>
      <div className='pr-10'>
        <Image src={linga} width={450} height={450} alt='img' className='rounded-full bg-[#FEECE2]'></Image>
      </div>
      <div className='flex flex-col w-[15%] gap-14'>
        <div className='pt-16 '>
          <h2 className='text-[#FEECE2] font-semibold text-3xl flex justify-end '>12</h2>
          <h2 className='text-zinc-400 text-lg font-semibold flex justify-end '>Years of Experience </h2>
        </div>
        <div className=''>
          <h2 className='text-[#FEECE2] font-semibold text-3xl flex justify-end '>2</h2>
          <h2 className='text-zinc-400 text-lg font-semibold flex justify-end '>Currently Working Projects </h2>
        </div>
        <div className=''>
          <h2 className='text-[#FEECE2] font-semibold text-3xl flex justify-end '>2</h2>
          <h2 className='text-zinc-400 text-lg font-semibold flex justify-end '>Currently Working Projects </h2>
        </div>
      </div>
      
    </div>
  )
}

export default intro