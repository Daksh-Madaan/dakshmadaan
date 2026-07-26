import React from 'react'
import {FaGithub} from 'react-icons/fa'
const Card = (props) => {
  return (
    <div className='flex flex-col gap-3 bg-[#151B23] p-4 text-[#E8E3D8] max-w-full w-90 rounded-xl border border-[#1F2830] transition-all duration-300 hover:shadow-[0_0_8px_0px_#ffffff2d]'>

      <div className='max-w-full w-150'>
        <img src='/1000048301.jpg' className='border bg-cover border-[#1F2830] rounded-xl'></img>
      </div>

      <h1 className='text-2xl'>{props.title}</h1>
      <ul className='flex flex-wrap gap-2'>
        {props.tags.map((pill => {
          return <li key={pill} className='p-1 pl-2 pr-2 rounded-full bg-[#0A0E13] text-sm font-extralight text-[#E8B540]'>#{pill}</li>
        }))}
      </ul>
      <a href={props.link} className='flex justify-center gap-2 items-center p-1 bg-[#E8B540] w-full font-bold text-center rounded-md transition-all duration-300 hover:shadow-[0_0_55px_3px_#ffffff2d]'>GitHub Repo<FaGithub size={20}/></a>
      <p className='font-light text-[#8B949E] text-justify'>{props.brief}</p>
    </div>
  )
}

export default Card
