import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Landing_page/Home/Home';
import Landing from './Landing_page/Landing/Landing';
import {motion} from 'framer-motion';
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {  

  const [transition, setTransition] = useState('none');
  const navigate = useNavigate()
  useEffect(() => 
  {
    if(transition === 'fade-in')
    {
      setTimeout(() => 
      {
        setTransition('fade-out')
      }, 2000)
    }
  }, [transition])
  return (
    <div>
      <div id="stars-container">
        
        <div>
          {
            transition === 'fade-in' ? 
            <motion.div 
              id="transition"
              style={{
                position: 'fixed',
                zIndex: 100,
                top: '0',
                left: '0'
              }}
              
              initial={{
                opacity: 0
              }}

              animate={{
                opacity: 1
              }}

              transition={{
                delay: 0,
                duration: 2
              }}
            >
            </motion.div>
            :
            transition === 'fade-out' ?
            <motion.div 
              id="transition"
              style={{
                position: 'fixed',
                zIndex: 100,
                top: '0',
                left: '0'
              }}
              
              initial={{
                opacity: 1
              }}

              animate={{
                opacity: 0
              }}

              transition={{
                delay: 0,
                duration: 2
              }}

              onAnimationComplete={() => {
                if(transition === 'fade-out')
                {
                  navigate('/landing');
                }
              }}
            >
            </motion.div> 
            :
            null
          }
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      </div>
      <Routes>
          <Route 
            path="/" 
            element={
              <Home setTransition={setTransition} transition={transition}/>
            }/>

          <Route
            path="/landing"
            element={
              <Landing />
            }
          />
      </Routes>
    </div>
  )
}

export default App
