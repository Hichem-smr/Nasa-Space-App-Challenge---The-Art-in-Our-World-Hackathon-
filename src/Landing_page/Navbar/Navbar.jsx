import '../../stars.css'
import './Navbar.css'

export default function Navbar ()
{
    return(
        <div class="navbar">
            <div>
                <div className="nav_left">
                    <div className="nav-container">
                        <div id = "logo">

                        </div>

                        <div className='nav_items'>
                            <button>Home</button>
                            <button>About us </button>
                            <button>Contact us</button>  
                        </div>

                        <div className='socials'>
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-instagram"></i>
                        </div>
                    </div>

                </div>
                <div className='nav_right'>
                    <button className="button">Connect</button>
                </div>
            </div>
        </div>

    )
}