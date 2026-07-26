import React from 'react'

const Nav = () => {
  return (
    <div className='w-full margin-auto sticky top-5'>
      <div className='max-w-[95%] p-2.5 w-max ring-2 ring-[#1F2830] m-auto bg-[#0A0E13] rounded-full flex flex-wrap gap-c-5 tracking-tight drop-shadow-[0_0px_65px_#ffffff2d] justify-around'>
        <div className='mt-px'>
          <a href='#Home' className='p-1.5 pl-3 pr-3 text-[#8B949E] hover:text-[#E8E3D8] hover:bg-[#1A2129] rounded-full transition-all duration-300 hover:drop-shadow-[0_-2px_65px_#ffffff2d] border-t border-[#0A0E13] hover:border-[#1F2830]'>Home</a>
          <a href='#Toolbox' className='p-1.5 pl-3 pr-3 text-[#8B949E] hover:text-[#E8E3D8] hover:bg-[#1A2129] rounded-full transition-all duration-300 hover:drop-shadow-[0_-2px_65px_#ffffff2d] border-t border-[#0A0E13] hover:border-[#1F2830]'>Toolbox</a>
        </div>
        <div className='mt-px'>
          <a href='#Projects' className='p-1.5 pl-3 pr-3 text-[#8B949E] hover:text-[#E8E3D8] hover:bg-[#1A2129] rounded-full transition-all duration-300 hover:drop-shadow-[0_-2px_65px_#ffffff2d] border-t border-[#0A0E13] hover:border-[#1F2830]'>Projects</a>
          <a href='#Connect' className='p-1.5 pl-3 pr-3 text-[#8B949E] hover:text-[#E8E3D8] hover:bg-[#1A2129] rounded-full transition-all duration-300 hover:drop-shadow-[0_-2px_65px_#ffffff2d] border-t border-[#0A0E13] hover:border-[#1F2830]'>Connect</a>
        </div>
      </div>
    </div>

  )
}

export default Nav
