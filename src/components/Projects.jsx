import React from 'react'
import Card from './Card.jsx'

const Projects = () => {
  return (
    <div id="Projects" className='scroll-mt-35 text-[#E8E3D8] font-bold mt-25 m-auto max-w-[90%] w-350'>
        <h1 className='text-3xl mb-5 m-auto tracking-wide rounded-xs border-b border-b-[#E8B540] w-max p-1 text-shadow-[0_0px_100px_#ffffff]'>Projects</h1>
    
        <div className='grid grid-cols-[repeat(auto-fill,minmax(270px,350px))] gap-3 justify-center m-auto w-full'>
            <Card title="Kaizen" tags={["Django","PostgreSQL","React JS","LangChain","LangGraph"]} link="https://github.com/Daksh-Madaan/kaizen" brief={["Uses AI to generate Roadmaps for desired skills","Adapts for learning style and pace","Breaks Roadmap into periodic tasks & checkpoints","Helps Self-Reflect with animated progress tracking features"]}/>
            <Card title="FrontRow" tags={["FastAPI","PostgreSQL","React JS","LangChain"]} link="https://github.com/Daksh-Madaan/FrontRow" brief={["Social platform for Designers and Frontend Devs to share Ideas & Code Snippets","X0,000+ Active Users","Allows for on-site code preview"]}/>
            <Card title="lnnk" tags={["Django","PostgreSQL","React JS","Vercel"]} link="https://github.com/Daksh-Madaan/lnnk" brief={["Linktree Clone","Built as a Learning Exercise for React, Django & PostgreSQL","Learnt User Auth to prevent Spam Signups"]}/>
        </div>
    </div>
    
  )
}

export default Projects
