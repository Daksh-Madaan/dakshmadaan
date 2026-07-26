import React from 'react'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import ToolBox from './components/ToolBox.jsx'
import Projects from './components/Projects.jsx'
import Connect from './components/Connect.jsx'

const App = () => {
  return (
    <div className='pb-10'>
      <Nav/>
      <About />
      <ToolBox />
      <Projects />
      <Connect />
    </div>
  )
}

export default App
