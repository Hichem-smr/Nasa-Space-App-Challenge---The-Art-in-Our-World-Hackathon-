import '../../stars.css'
import './Content.css'
import {motion} from 'framer-motion'
export default function Content ()
{
    return(
        <div className='content'>
                <motion.div
                    id="planet_yellow"
                    animate={{
                        y: [5, 0, -5, 0, 5]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3
                    }}
                >
                       <img src="/planet_yellow.png"/>
                </motion.div>
             
                <motion.div 
                    id="planet_blue"
                    animate={{
                        y: [5, 0, -5, 0, 5]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3
                    }}
                >
                    <img src="/planet_blue.png"/>
                </motion.div>
                <motion.div 
                    id="planet_pink"
                    animate={{
                        y: [5, 0, -5, 0, 5]
                    }}
                    transition={{
                        delay: 1,
                        repeat: Infinity,
                        duration: 3
                    }}
                >
                    <img src="/planet_pink.png"/>
                </motion.div>
                    
                
                <div className = "page1">
                    <div className = "intro">
                        <h1><span id="wlcm">WELCOME TO</span> <span id= "NasArt">NasArt</span></h1>
                    </div>

                    <div className='description'>
                        Nasarst is a game developed by enthusiastic student from different IT sectors in the purpose of combining
                        space and art in an artistic and a fun way.
                    </div>
                    
                    <div id="button_content">
                    <button className="button">Let's start</button>
                    </div>
                </div>     
           </div>

            
        

    )
}