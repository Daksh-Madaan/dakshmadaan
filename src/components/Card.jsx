import React from 'react'

const Card = (props) => {
  return (
    <div className='grow bg-emerald-600/25 rounded-md ring-1 ring-emerald-600/50 w-60 p-5 flex flex-col gap-3'>
      <h1 className='font-bold text-xl text-emerald-700'>{props.title}</h1>
      <a className='underline underline-offset-2 text-emerald-700 font-extralight' href={props.link}>Github Repo</a>
      <p className='text-emerald-700'>{props.brief}</p>
    
    </div>
  )
}

export default Card
