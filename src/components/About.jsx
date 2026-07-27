import React from 'react'
import { FaLinkedin, FaMapMarkedAlt } from 'react-icons/fa'
import { SiLeetcode, SiX, SiGithub, SiPython, SiJavascript } from 'react-icons/si'

const About = () => {
  return (
    <div id="Home" className='scroll-mt-35 bg-[#151B23] mt-12 p-5 text-[#E8E3D8] max-w-[90%] m-auto w-250 rounded-xl ring-1 ring-[#1F2830]'>

      <div className='w-full flex flex-wrap-reverse justify-around sm:justify-between items-center gap-5'>
        <div className='flex flex-col items-center text-center sm:items-start sm:text-left'>
          <h1 className='text-2xl font-bold tracking-tight text-shadow-[0_0_85px_#ffffff] border-b border-b-[#E8B540] rounded-xs'>Daksh Madaan</h1>
          <p className='font-extralight'>Stitching AI Into Backends</p>
          <p className='text-sm flex gap-1 items-center tracking-tight'><FaMapMarkedAlt size={18} />Jalandhar, PB | Chandigarh, CH</p>

          <div className='flex gap-5 mt-5'>
            <a href='https://www.github.com/Daksh-Madaan' target='_blank'><SiGithub size={22} /></a>
            <a href='https://www.linkedin.com/dakshmadaan' target='_blank'><FaLinkedin size={26} /></a>
            <a href='https://x.com/_dakshmadaan' target='_blank'><SiX size={22} /></a>
            <a href='https://leetcode.com/dakxh404' target='_blank'><SiLeetcode size={22} /></a>
          </div>
          <span className='text-yellow-600 font-extrabold text-sm mt-5 bg-[#E8E3D8] rounded-full pl-2 pr-2 ring-1 tracking-wide ring-[#E8B540]'>Open To Work</span>
        </div>
        <img src='\me.jpg' className='w-30 h-30 rounded-sm ring-2 ring-[#E8B540]'></img>
      </div>

      <p className='text-justify mt-5 m-auto text-[#8B949E] text-lg'>
          I mostly work with <span className='text-[#E8E3D8]'>Python & Javascript</span>, 
          focused on building AI-powered backend systems, interested in RAG and making LLMs reliable & genuinely useful.
          Currently, exploring <span className='text-[#E8E3D8]'>Agentic RAG</span> to deploy Custom LLMs & Agents to apps.
          <br></br><span className='italic'>Always Building, Always Learning</span>
          <br></br>2nd-Year CSE Student @ Chandigarh University
      </p>

    </div>
  )
}

export default About
