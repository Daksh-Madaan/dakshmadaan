import React from 'react'
import {FaPython,FaJsSquare} from 'react-icons/fa'
import {SiPostgresql,SiLangchain,SiLanggraph,SiDjango,SiFastapi, SiReact} from 'react-icons/si'

const ToolBox = () => {
  return (
    <div id='Toolbox' className='scroll-mt-35 flex flex-col items-center bg-[#151B23] mt-5 p-5 text-[#E8E3D8] max-w-[90%] m-auto w-250 rounded-xl ring-1 ring-[#1F2830]'>
      <p className='tracking-widest border-b border-b-[#E8B540] rounded-xs'>My ToolBox</p>
        <div className='text-4xl mt-5 flex flex-wrap gap-10 justify-center'>
          <FaPython />
          <FaJsSquare />
          <SiPostgresql />
          <SiFastapi />
          <SiDjango />
          <SiLangchain />
          <SiLanggraph />
          <SiReact />
        </div>
    </div>
  )
}

export default ToolBox
