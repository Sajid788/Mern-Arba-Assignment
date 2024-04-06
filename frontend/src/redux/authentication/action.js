
import {
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP
} from './types';

import { api } from './api';


export const handleLogin = ({ userName, password }) => async (dispatch) => {
  try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const response = await fetch(`${api}/user/login`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, password }),
      });
      if (!response.ok) {
          throw new Error("Login failed");
      }
      const data = await response.json();
      const Token = data.token; 
      localStorage.setItem("token", Token);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
      console.log("Login failed:", error);
  }
};


export const handleSignup = ({ fullName, userName, email, password }) => async (dispatch) => {
    try {
      const response = await fetch(`${api}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName,
          userName: userName,
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error('Signup failed');
      }
      const data = await response.json();
      console.log(data);
      dispatch({ type: USER_SIGNUP, payload: data });
      alert("Signup successful! Please Login");
    } catch (error) {
      console.log('Signup failed:', error);
      
    }
  }
  

  export const handleLogout = () => async (dispatch) => {
    try {
      localStorage.removeItem("token");
      dispatch({ type: USER_LOGOUT });
    } catch (error) {
      console.log('Logout failed:', error);
    }
  };