import React, { useEffect, useState } from 'react'
import {ParticlesFallingBackground, ParticlesGridBackground} from './components/layouts/Particles'
import Header from './components/pages/Header'
import About from './components/pages/About'
import Works from './components/pages/Works'
import Contact from './components/pages/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animation } from './profile'


function App() {

  const [showFalling, setShowFalling] = useState(true)
  //let showFalling = true
  //let showGrid = false

  const toggleBackground = () => {
      setShowFalling(!showFalling)
  }
  useEffect(() => {
      AOS.init({
        duration: animation.duration,
        once: animation.once,
        disable: !animation.animate
      })
// eslint-disable-next-line
  }, [])

  return ( 
    <div className="App">
      <Header updateBackground={toggleBackground}/>
      {showFalling && <ParticlesFallingBackground/>}
      {!showFalling && <ParticlesGridBackground/>}
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
