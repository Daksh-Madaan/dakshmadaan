import React from 'react'
import Card from './Card.jsx'

const Project = () => {
  return (
    <div className='mt-5 m-auto flex flex-col max-w-[90%] w-200'>
      <h1 className='text-3xl font-bold text-emerald-700 mb-3 mt-3 border-dashed border-b-4 border-emerald-700 w-max'>Projects</h1>
      <div className='flex flex-wrap w-full justify-center gap-3'>
          <Card title="FrontRow" link="https://www.github.com/Daksh-Madaan/FrontRow/" brief="A Social platform for Front-end devs to share code snippets and design concepts."/>
          <Card title="Kaizen" link="https://www.github.com/Daksh-Madaan/Kaizen/" brief="Self-Help Tool, uses AI to perosnalize roadmaps and progress tracking for new desired skills."/>
          <Card title="lnnk" link="https://www.github.com/Daksh-Madaan/lnnk/" brief="A Linktree clone built as a learning exercise to learn Django, PostgreSQL & React."/>
      </div>
    </div>
  )
}

export default Project
