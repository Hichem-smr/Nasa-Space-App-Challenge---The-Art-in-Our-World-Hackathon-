import '../../stars.css'
import './Contact.css'

import { motion } from 'framer-motion'

export default function Landing ()
{
    return(
      <div className = "contact_contain">
        <div>
            <img src=".../public/materials/ovni.giv" />
        </div>
        <div className='contact'>
                <div>
                    <h1 className="contact_us"> For more Informations Contact us</h1>
                
                    <div className='input_contact'><input type="text"  /></div> 
                </div>
                    
        </div>
        </div>
       

    )
}