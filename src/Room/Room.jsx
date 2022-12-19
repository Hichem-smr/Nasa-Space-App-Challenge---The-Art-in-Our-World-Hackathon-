import Navbar from "../Landing_page/Navbar/Navbar";
import io from 'socket.io-client';
const socket = io('http://localhost:5000');

export default function Room()
{
    const [players, setPlayers] = useState([]);
    socket.emit('')
    return(
        <div>
            <Navbar/>
        </div>
    )
}