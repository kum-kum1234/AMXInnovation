import { useState } from 'react'
import {useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function App(){
    const [users , setUsers] = useState([]);
    useEffect(() =>{
       fetch("https://jsonplaceholder.typicode.com/users")
       .then((response) => response.json())
       .then((data) => {
           setUsers(data);
       });
    }, []);
       return (
        <div>
            <h1>User list</h1>
            {users.map((user) =>(
                <div key ={user.id}>
                <h3>{user.email}</h3>
                <p>Latitude: {user.address.geo.lat}</p>
                </div>
            ))}
        </div>
  );
}
export default App;