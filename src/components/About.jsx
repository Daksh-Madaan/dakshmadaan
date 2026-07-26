import React from 'react'
import { FaLinkedin, FaMapMarkedAlt } from 'react-icons/fa'
import { SiLeetcode, SiX, SiGithub } from 'react-icons/si'

const About = () => {
  return (
    <div id="Home" className='scroll-mt-35 bg-[#151B23] mt-12 p-5 text-[#E8E3D8] max-w-[90%] m-auto w-250 rounded-xl ring-1 ring-[#1F2830]'>

      <div className='w-full flex flex-wrap-reverse justify-around sm:justify-between items-center gap-5'>
        <div className='flex flex-col items-center text-center sm:items-start sm:text-left'>
          <h1 className='text-2xl font-bold tracking-tight text-shadow-[0_0_85px_#ffffff] border-b border-b-[#E8B540] pr-1 rounded-xs'>Daksh Madaan</h1>
          <p className='font-extralight'>Stitching AI Into Backends</p>
          <p className='text-sm flex gap-1 items-center'><FaMapMarkedAlt size={18} />Jalandhar, PB | Chandigarh, CH</p>

          <div className='flex gap-5 mt-5'>
            <a href='https://www.github.com/Daksh-Madaan' target='_blank'><SiGithub size={22} /></a>
            <a href='https://www.linkedin.com/dakshmadaan' target='_blank'><FaLinkedin size={26} /></a>
            <a href='https://x.com/_dakshmadaan' target='_blank'><SiX size={22} /></a>
            <a href='https://leetcode.com/dakxh404' target='_blank'><SiLeetcode size={22} /></a>
          </div>
        </div>
        <img src='\me.jpg' className='w-30 h-30 rounded-sm ring-2 ring-[#E8B540]'></img>
      </div>

      <p className='text-justify mt-5 m-auto text-[#8B949E]'>Elit dolore irure quis pariatur fugiat veniam ipsum reprehenderit excepteur magna culpa ad. Aliquip qui magna dolore ea. Aliquip sit aute pariatur aute aute id elit consequat ex deserunt. Dolor magna commodo quis aute incididunt dolor. Cillum consectetur velit enim nisi. Nulla ipsum cillum ad cillum dolore ex velit ullamco cupidatat commodo. Ad nulla consectetur ut cillum id voluptate ea incididunt ut fugiat dolor elit. Ex pariatur sit sunt voluptate aliquip. Id nulla ex deserunt voluptate voluptate ullamco incididunt ea eiusmod. Fugiat laborum minim mollit et ullamco elit dolor tempor aute pariatur dolor consectetur nisi. Aute non velit aliquip nostrud dolore voluptate Lorem. Nulla ex sunt do pariatur exercitation aliquip velit mollit esse velit. Ullamco minim enim veniam commodo nostrud ut. Ad veniam ad cupidatat velit consequat quis reprehenderit velit reprehenderit quis. In elit proident aliqua amet est ut sit.</p>

    </div>
  )
}

export default About
