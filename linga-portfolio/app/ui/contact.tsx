import React from 'react'
import Image from 'next/image'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import github from './github.png'
const contact = () => {
  return (
    <div className='h-[400px]  mx-24 p-10 flex items-center justify-center'>
        <div className='h-[350px] w-[350px] rounded-full flex justify-center  items-center gap-4 flex-col border border-dashed border-[#FEECE2] text-[#FEECE2]'>
            <h1 className='font-sans font-semibold text-5xl'>Lets Say Hi</h1>
            <h2 className='font-sans font size-min text-xl'>lingesh480500@gmail.com</h2>
            <div className='pt-8 flex flex-row gap-10'>
                <Image width={40} height={40} src={instagram} alt='insta' className='hover:scale-125 transition duration-500 cursor-pointer'></Image>
                <Image width={40} height={40} src={github} alt='insta' className='hover:scale-125 transition duration-500 cursor-pointer'></Image>
                <Image width={40} height={40} src={linkedin} alt='insta' className='hover:scale-125 transition duration-500 cursor-pointer'></Image>
            </div>
            
        </div>
    </div>
  )
}

export default contact