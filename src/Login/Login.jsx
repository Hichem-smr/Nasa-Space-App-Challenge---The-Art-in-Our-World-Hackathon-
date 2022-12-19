import Navbar from '../Landing_page/Navbar/Navbar'
import '../stars.css'
import './Login.css' 
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux';
import {login} from '../store/userSlice'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function Register()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleSubmit(e) 
    {
        let data = {}
        e.preventDefault();
        const inputs = e.target.querySelectorAll('input');
        console.log(inputs)
        for(let inpt of inputs)
        {
            console.log(inpt);
            data[inpt.name] = inpt.value;
        }

        console.log(data);
        axios.post('http://localhost:5000/login', data)
        .then(res => {
            dispatch(login(res.data.token))
            navigate('/landing');
        })
        .catch(err => {
            console.log(err.response);
        })
    }


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
            <div className = "contact_contain">
                <div>
                    <img src="/materials/ovni.gif" />
                </div>
                <div className='contact'>
                    <form onSubmit={handleSubmit}>
                        <h1 className="contact_us">SIGN IN </h1>
                        <div className='input_contact'>
                            <input type="text" placeholder='Email' name="email"/>
                        </div>
                        <div className='input_contact'>
                            <input type="password" placeholder='Password' name="password"/>
                        </div>

                        <button className="button orbitron">Sign in</button>
                    </form>
                </div>
            </div>
        </motion.div>

    )
}