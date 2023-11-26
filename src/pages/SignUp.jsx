import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../src/fbconfig";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate = useNavigate();
  const signUp = async (e) => {
    e.preventDefault();
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        const user = userCredential.user;
        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate("/");
    }catch(error) {
        console.log(error);
      }
  }

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp} className="signup-form">
        <h1 className="create">Create New Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" className="submit-button">Sign Up</button>
        <a href="/login" className="login-text">Login to your existing account</a>
      </form>
    </div>
  );
};

export default SignUp;