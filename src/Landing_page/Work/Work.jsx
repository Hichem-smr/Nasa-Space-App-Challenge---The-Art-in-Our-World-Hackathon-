import Navbar from '../Navbar/Navbar'
import '../../stars.css'
import { motion } from 'framer-motion'
import './Work.css'
export default function Work ()
{
    return(
      <div className="work">
        <div className="how_container">
            <div className="how">
                <div>
                <h1 className='how-title'>How does it work ?</h1>
                <p className='text-title'>   
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div id="button_content">
                    <button className="button">Let's start</button>
                </div>
                </div>
              
            </div>
            <div className="NFT">
                <img src="/nft.png"/>
            </div>
        </div>
        
      </div>
    )
}