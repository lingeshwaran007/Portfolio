import React from 'react'
import Image from 'next/image'
import proimg from './proimg.jpg'
import Link from 'next/link'

const projectcard = () => {
  return (
    <div className=' text-[#FEECE2] h-[600px] flex items-center justify-between'>
        <div className='flex gap-10 w-[45%] flex-col'>
            <h2 className='font-semibold text-5xl font-sans'>Dairy Care</h2>
            <h2 className='font-normal text-2xl text-[#FEECE2] font-sans'>Developed a mobile application using Flutter , Firebase as DB and Python as Backend </h2>
            <Link href='/users' className='text-xl text-[#FEECE2]'>View Source</Link>

            

        </div>
        <div className='flex '>
            {/* <Image src={proimg} height={700} width={600} alt='img' className='rounded-3xl '></Image> */}
        </div>
    </div>
  )
}

export default projectcard