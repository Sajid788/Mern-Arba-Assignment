import React, { useState } from 'react';
import dummy from "../assets/sgnup-login.jpg";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Signup = () => {
  const [userName, setUsername] = useState("");
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  async function handleSignup(e) {
    e.preventDefault();
   
    try {
      if (password !== confirmPassword) {
        return alert("Password not match!");
      }
      const response = await fetch("https://arba-backend-3585.vercel.app/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          fullName,
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      toast({
        title: "Signup successful! Please login",
        position:"top",
        status: "success",
        duration: 3000, 
        isClosable: true,
      });
      navigate("/login"); 
    } catch (error) {
      console.log(error);
      alert("Signup failed. Please try again.");
    }
  }

  return (
    <>
      <div className='Signup-main'>
        <img style={{ width: "500px", height: "650px" }} src={dummy} alt="" />
        <div>
          <span style={{ fontSize: "120px", marginLeft:"95px", color: "rgb(0,171,197)" }}><FaCircle /></span>
          <h1 style={{ }}>APP NAME</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, nobis!</p>
          <input
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder='Username'
          />
          <input
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            placeholder='Fullname'
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder='Email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='Password'
          />
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder='Confirm Password'
          />
          <button onClick={handleSignup}>Register</button>
          <p>Already have an account? <span  onClick={() => navigate("/login")}  style={{ color: "rgb(0,171,197)", cursor: "pointer" }}>Login</span></p>
        </div>
      </div>
    </>
  );
}

export default Signup;