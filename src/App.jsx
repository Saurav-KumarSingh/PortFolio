import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  


  return (
    <>
    <div className='dark:bg-slate-900 bg-white'>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App