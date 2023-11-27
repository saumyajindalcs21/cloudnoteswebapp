import React from "react";
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
    const create = async () => {
      navigate("/CreatePost");
      
  }
  return (
    <div>
      <div><span><button onClick={create} className="notebutton">create new note</button></span></div>
        <h1>Welcome to the Home</h1> <span><button onClick={handleLogout} className="logbu">Logout</button></span>
        
        
        
    </div>
  )
}

export default Home