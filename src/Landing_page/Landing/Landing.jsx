import Navbar from '../Navbar/Navbar'
import '../../stars.css'
import './Landing.css'
import Content from '../Content/Content' 
import { motion } from 'framer-motion'
import Work from '../Work/Work' 
import Rules from '../Rules/Rules'
import Contact from '../Contact/Contact'
export default function Landing ()
{
    return(
        <motion.div 
            id="landing"
            initial={{
                y: "-100%"
            }}

            animate={{
                y: 0
            }}

            transition={{
                duration: 1 
            }}
        >
            <Navbar/>
            <Content/>
            <Work/>
            <Rules/>
            <Contact/>
        </motion.div>

    )
}