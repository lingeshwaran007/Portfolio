import React from 'react'
import Projectcard from './projectcard'

const projects = () => {
  return (
    <div className='h-[1600px] flex-grow mx-24 p-10 flex-col flex  '>
        <h2 className='flex justify-center pt-16 pb-16 text-[#FEECE2] font-sans text-7xl font-semibold'>Projects</h2>
        <Projectcard/>
        <Projectcard/>
        <Projectcard/>
        

    </div>
  )
}

export default projects