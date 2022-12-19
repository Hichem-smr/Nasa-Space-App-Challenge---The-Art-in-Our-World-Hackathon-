import Navbar from '../Navbar/Navbar'
import '../../stars.css'
import './Rules.css'

export default function Rules ()
{
    return(
       <div className='RulesContainer'>
        <div className='rules'>
                <img src="astronaut.png"/>
            <div className='rules_Objectives'>
                <h1>Rules And Objectives</h1>
                <div className='icon_container'> 
                    <li>
                        <i class="fa fa-angle-double-right"></i>
                        Any offensive behavior will result in an account suspension of the user permanently.
                    </li>
                    <li>
                        <i class="fa fa-angle-double-right"></i>
                        Hacking is illegal and is considered as a fraction and will result in a suspension.
                    </li>
                    <li>
                        <i class="fa fa-angle-double-right"></i> 
                        Remember to have fun.
                    </li>
                </div>
            </div>
        </div>
     

       </div>

    )
}