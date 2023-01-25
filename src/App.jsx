import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Interests from './components/Interests'
import About from './components/About'




function App() {

  return (
   <div className='app--container'>
    <div className='app--container2'>

   <Header /> 
   <About />
    <Interests />
    <Footer />
   
    </div>
   </div>
  
   )
}

export default App
