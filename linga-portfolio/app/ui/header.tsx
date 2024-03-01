import React from 'react'
import Image from 'next/image'


const header = () => {
  return (
    <div className=' h-[150px] mx-24  flex justify-between items-center p-12 '>
        
        <h1 className='text-4xl font-semibold font-mono text-[#FEECE2]'>Lingesh</h1>
        <div className='flex justify-between text-[#FEECE2] gap-12 font-medium text-lg'>
          
            <button className='hover:text-[#aeb8fe]'>Home</button >
            <button className='hover:text-[#aeb8fe]'>About</button >
            <button className='hover:text-[#aeb8fe]'>Service</button >
            <button className='hover:text-[#aeb8fe]'>Portfolio</button >
            <button className='hover:text-[#aeb8fe] '>Contact</button >
        </div>

        <button className='bg-[#FEECE2]  rounded-3xl font-semibold text-black w-32 text-lg h-12 hover:scale-110 bg-[#aeb8fe] transition duration-500'>Contact</button>


    </div>
  )
}

export default header