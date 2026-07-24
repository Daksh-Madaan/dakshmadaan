import React from 'react'
import Card from './Card.jsx'

const Skills = () => {
    const stack = ["LangChain","Django","React","LangGraph","PostgreSQL","Tailwind","FastAPI"];

    return (
        <div className='mt-5 m-auto flex flex-col max-w-[90%] w-200'>
            <h1 className='text-3xl font-bold text-emerald-700 mb-3 mt-3 border-dashed border-b-4 border-emerald-700 w-max'>My Toolbox</h1>
            <div className='flex flex-wrap w-full justify-center gap-3'>
                {stack.map((card =>
                    <p className='grow bg-emerald-600/25 rounded-md ring-1 ring-emerald-600/50 w-50 font-bold p-1 flex flex-col gap-3 text-center text-2xl text-emerald-700'>{card}</p>
                ))}
            </div>
        </div>
  )
}

export default Skills
