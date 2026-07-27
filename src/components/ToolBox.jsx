import React from 'react'
import { SiJavascript, SiPostgresql, SiLangchain, SiLanggraph, SiDjango, SiFastapi, SiReact, SiCplusplus, SiTailwindcss, SiGit, SiRedis, SiPython, SiVercel, SiGooglecolab } from 'react-icons/si'
import {BiLogoPostgresql} from 'react-icons/bi'

const ToolBox = () => {
  return (
    <div id='Toolbox' className='scroll-mt-35 bg-[#151B23] mt-8 p-5 text-[#E8E3D8] max-w-[90%] m-auto w-250 rounded-xl ring-1 ring-[#1F2830]'>
      <p className='tracking-widest border-b border-b-[#E8B540] rounded-xs m-auto w-max'>My ToolBox</p>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] m-auto w-full'>
        <div className='mt-3 p-3'>
          <h3 className='text-md font-bold underline underline-offset-4 text-[#8B949E]'>Languages</h3>
          <div className='flex gap-8 mt-3 items-center'>
            <p className='flex flex-col gap-2 text-sm items-center'><SiPython size={28} /> Python</p>
            <p className='flex flex-col gap-2 text-sm items-center'><SiJavascript size={28} /> Javascript</p>
            <p className='flex flex-col gap-2 text-sm items-center'><SiCplusplus size={28} /> Cpp</p>
          </div>
        </div>
        <div className='mt-3 p-3'>
          <h3 className='text-md font-bold underline underline-offset-4 text-[#8B949E]'>Backend</h3>
          <div className='flex gap-8 mt-3 items-center'>
            <p className='flex flex-col gap-2 text-sm items-center'><SiDjango size={28} /> Django</p>
            <p className='flex flex-col gap-2 text-sm items-center'><SiFastapi size={28} /> FastAPI</p>
          </div>
        </div>
        <div className='mt-3 p-3'>
          <h3 className='text-md font-bold underline underline-offset-4 text-[#8B949E]'>AI Integration</h3>
          <div className='flex gap-8 mt-3 items-center'>
            <p className='flex flex-col gap-2 text-sm items-center'><SiLangchain size={28} /> LangChain</p>
            <p className='flex flex-col gap-2 text-sm items-center'><SiLanggraph size={28} /> LangGraph</p>
          </div>
        </div>
        <div className='mt-3 p-3'>
          <h3 className='text-md font-bold underline underline-offset-4 text-[#8B949E]'>Frontend</h3>
          <div className='flex gap-8 mt-3 items-center'>
            <p className='flex flex-col gap-2 text-sm items-center'><SiReact size={28} /> React</p>
            <p className='flex flex-col gap-2 text-sm items-center'><SiTailwindcss size={28} /> Tailwind</p>
          </div>
        </div>
        <div className='mt-3 p-3'>
          <h3 className='text-md font-bold underline underline-offset-4 text-[#8B949E]'>Data & Tools</h3>
          <div className='flex gap-8 mt-3 items-center'>
            <p className='flex flex-col gap-2 text-sm items-center'><BiLogoPostgresql size={32} /> PostgreSQL</p>
            <p className='flex flex-col gap-2 text-sm items-center'><SiRedis size={28} /> Redis</p>
            <p className='flex flex-col gap-2 text-sm items-center'><SiGit size={28} /> Git</p>
            <p className='flex flex-col gap-2 text-sm items-center'><SiVercel size={28} /> Vercel</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ToolBox
