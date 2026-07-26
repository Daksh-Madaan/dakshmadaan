import React from 'react'
import {FaPaperPlane} from 'react-icons/fa'

const Connect = () => {
  return (
    <div id='Connect' className='text-[#E8E3D8] max-w-[90%] w-200 mt-25 m-auto'>
        <h1 className='rounded-xs text-3xl mb-5 m-auto tracking-wide border-b border-b-[#E8B540] w-max p-1 text-shadow-[0_0px_100px_#ffffff]'>Let's Connect</h1>

      <form className='flex flex-col gap-5 items-center'>
        <input type='email' className='bg-[#E8E3D8] text-black rounded-md outline-0 p-2 max-w-full w-100 border-3 border-[#E8B540]' placeholder='johndoe@example.com'></input>
        <textarea className='bg-[#E8E3D8] text-black rounded-md outline-0 p-2 w-full border-3 border-[#E8B540]' rows={6} placeholder='Write your message here!'></textarea>
        <button type="submit" className='bg-[#E8B540] p-2 w-32 rounded-md hover:shadow-[0_0_55px_3px_#ffffff2d] transition-all duration-300 cursor-pointer flex items-center justify-around'>Reach Out <FaPaperPlane/></button>
      </form>
    </div>
  )
}

export default Connect
