import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useToast } from "@chakra-ui/react"
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [display,setDisplay] = useState(false)
  const navigate = useNavigate();

  const initialCart = JSON.parse(localStorage.getItem('cart')) || {};
  const toast = useToast();
  function logout(){
      localStorage.removeItem('token');
      setDisplay(false);
      navigate("/");
      window.location.reload();
  
      toast({
        title: "Logout successful!",
        position:"top",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
  }

  return (
    <>
      <div className='navbar'>
        <Link onClick={()=>setDisplay(false)} to={"/"}><button>LOGO</button></Link>
        <div>
            <Link style={{color:"rgb(0,171,197)"}} to={"/cart"}><span><FaCartShopping/></span></Link>
            <span onClick={()=>setDisplay(!display)}><FaUserCircle/></span>     
        </div>
      </div>
      {
        display ? <div className='navbar-profile-popup'>
        <Link onClick={()=>setDisplay(!display)} style={{color:"rgb(0,171,197)"}} to={"/cart"}> <span>My store</span></Link>
        <Link onClick={()=>setDisplay(!display)} style={{color:"rgb(0,171,197)"}} to={"/profile"}><span>Profile</span></Link>
       <span onClick={logout}>Logout</span>
      </div>  : ""
      }
    </>
    
  )
}

export default Navbar