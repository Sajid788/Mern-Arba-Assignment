import React, { useEffect, useState } from 'react'
import dummy from "../assets/sgnup-login.jpg";
import { FaCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin } from '../redux/authentication/action';
import {useNavigate} from "react-router-dom"

const Login = () => {

  const[userName,setUserName] = useState("")
  const[password,setPassword] = useState("")
  const navigate = useNavigate()

  const store = useSelector((store) => store.userReducer)
  const dispatch = useDispatch()
  console.log(store);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      store.isAuthenticated = true;
    }
  }, [navigate]);

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await dispatch(handleLogin(userName,password))
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='Signup-main'>
        <img style={{width : "500px",height:"650px"}} src={dummy} alt="" />
        <div>
          <span style={{fontSize : "120px", marginLeft:"95px",color:"rgb(0,171,197)"}}><FaCircle/></span>
          <h2 style={{}}>APP NAME</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptas.</p>
          <input type="text" placeholder='Username'
          value={userName}
          onChange={(e)=>setUserName(e.target.value)} />
          <input type="password" placeholder='Password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)} />
          <button onClick={handleSubmit}>Login</button>
          <p>Don't have an account? <span onClick={() => navigate("/signup")} style={{color:"rgb(0,171,197)",cursor:"pointer"}}>Sign up</span></p>
        </div>
      </div>
    </>
  )
}

export default Login