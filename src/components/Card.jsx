import React from 'react'
import {FaGithub} from 'react-icons/fa'
const Card = (props) => {
  return (
    <div className='flex flex-col gap-3 bg-[#151B23] p-4 text-[#E8E3D8] max-w-full w-90 rounded-xl border border-[#1F2830] transition-all duration-300 hover:shadow-[0_0_8px_0px_#ffffff2d]'>

      <div className='max-w-full w-150'>
        <img src='/1000048301.jpg' className='border border-[#1F2830] rounded-xl'></img>
      </div>

      <h1 className='text-2xl'>{props.title}</h1>
      <div className='flex flex-wrap gap-2 h-20'>
        {props.tags.map((pill => {
          return <p key={pill} className='w-max h-max text-center rounded-full bg-[#E8E3D8]/10 p-1.5 text-sm font-extralight text-[#E8B540]'>#{pill}</p>
        }))}
      </div>
      
      <a href={props.link} className='flex justify-center gap-2 items-center p-1 bg-[#E8B540] w-full font-bold text-center rounded-md transition-all duration-300 hover:shadow-[0_0_55px_3px_#ffffff2d]'>GitHub Repo<FaGithub size={20}/></a>
        
      <ul>
        {props.brief.map(point => {
          return <li className='list-inside font-light p-1 text-[#8B949E] text-justify'>» {point}</li>
        })}
      </ul>  
    </div>
  )
}

export default Card
