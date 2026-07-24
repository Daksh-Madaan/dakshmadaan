import React from 'react'

const Nav = () => {
  return (
    <div className='flex mt-3 gap-x-150 gap-y-3 flex-wrap max-w-[90%] w-270 items-center justify-center m-auto'>
      <h1 className='font-medium text-3xl text-emerald-700'>daksh.md</h1>
      <ul className='flex gap-5 text-emerald-700'>
        <li className='p-1 w-22 text-center bg-emerald-600/25 rounded-md hover:rounded-xl transition-all duration-300'><a href=''>GitHub</a></li>
        <li className='p-1 w-22 text-center bg-emerald-600/25 rounded-md hover:rounded-xl transition-all duration-300'><a href=''>Writings</a></li>
      </ul>
    </div>
  )
}

export default Nav
