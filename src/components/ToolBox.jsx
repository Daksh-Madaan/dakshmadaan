import React from 'react'
import {FaPython,FaJsSquare} from 'react-icons/fa'
import {SiPostgresql,SiLangchain,SiLanggraph,SiDjango,SiFastapi, SiReact} from 'react-icons/si'

const ToolBox = () => {
  return (
    <div id='Toolbox' className='scroll-mt-35 flex flex-col items-center bg-[#151B23] mt-8 p-5 text-[#E8E3D8] max-w-[90%] m-auto w-250 rounded-xl ring-1 ring-[#1F2830]'>
      <p className='tracking-widest border-b border-b-[#E8B540] rounded-xs'>My ToolBox</p>
        <div className='text-4xl mt-5 flex flex-wrap gap-10 justify-start'>
          <p className='flex flex-col items-center text-sm'><FaPython size={38}/> Python</p>
          <p className='flex flex-col items-center text-sm'><FaJsSquare size={38}/> JavaScript</p>

          <p className='flex flex-col items-center text-sm'><SiPostgresql size={38}/> PostgreSQL</p>

          <p className='flex flex-col items-center text-sm'><SiDjango size={38}/> Django</p>
          <p className='flex flex-col items-center text-sm'><SiFastapi size={38}/> FastAPI</p>
       
          <p className='flex flex-col items-center text-sm'><SiLangchain size={38}/> LangChain</p>
          <p className='flex flex-col items-center text-sm'><SiLanggraph size={38}/> LangGraph</p>
        
          <p className='flex flex-col items-center text-sm'><SiReact size={38}/> React</p>
        </div>
    </div>
  )
}

export default ToolBox
