import React from 'react'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Links from './components/Links.jsx'

const App = () => {
  return (
    <div>
      <Nav/>
      <About />
      <Skills />
      <Project />
      <Links />
    </div>
  )
}

export default App
