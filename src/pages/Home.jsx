import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {auth} from '../fbconfig';
const Home = () => {
 const navigate = useNavigate();
    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/Login");
    }
  return (
    <div>
        <h1>Welcome to the Home</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home