import '../../stars.css'
import './Home.css'
import './button.scss'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Home ({
    setTransition,
    transition
})
{
    const [start, setStart] = useState(false);
    const ref = useRef(null);
    return(
        <div id="home">
            <div id="start-section">
                
                <div id="welcome">

                    <motion.div
                        initial={{
                            opacity: 1
                        }}

                        animate={{
                            opacity: start ? 0 : 1
                        }}

                        transition={{
                            duration: 1.2
                        }}

                        onAnimationComplete={() => 
                        {
                            if(start)
                            {
                                setTransition('fade-in');
                            }
                        }}
                    >
                        <div>
                            <img src="/logo.png" />
                        </div>
                        <h1 className="title orbitron">
                            Welcome to NasArt
                        </h1>
                        
                        <button onClick={e => setStart(true)} className="orbitron button start learn-more">
                            <b>Start the adventure</b>
                        </button>
                    </motion.div>
                </div>
                <div id="rocket">
                    <img src={"/materials/rocket.gif"} />
                </div>
            </div>
        </div>

    )
}