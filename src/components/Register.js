import React, { useState } from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { callApi } from "./util";
import {TextField} from '@material-ui/core'


const Register = ({ setUser, token, setToken }) => {
  const { isLoggedIn, setIsLoggedIn, setUserToken } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
  const history = useHistory();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const userResp = await callApi({ 
      url: '/users/register',
      method: "POST",
      body: {
          firstName,
          lastName,
          email,
          username,
          password
      } });
      console.log(userResp, "it worked", username, password);
      if (userResp && userResp.user.username) {
        localStorage.setItem("token", token);
        setToken(userResp.user.token);
        setUser(userResp.user.username);
        setIsLoggedIn(true);
        if (userResp.user.firstName) {
          alert(`Welcome ${firstName}, Thank you for registering `)
          history.push('/home');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <> 
      <h1>Hi there, please register below! </h1>
      {
        isLoggedIn ? 
        history.push('/home') :
      <form onSubmit={handleRegister}>
      <TextField
          type="text"
          placeholder="firstName"
          value = {firstName}
          onChange={(event) => setFirstName(event.target.value)}
        ></TextField>
        <hr></hr>  
        <TextField
          type="text"
          placeholder="lastName"
          value = {lastName}
          onChange={(event) => setLastName(event.target.value)}
        ></TextField>
        <hr></hr>  
        <TextField
          type="text"
          placeholder="email"
          value = {email}
          onChange={(event) => setEmail(event.target.value)}
        ></TextField>
        <hr></hr>  
        <TextField
          type="text"
          placeholder="username"
          value = {username}
          onChange={(event) => setUsername(event.target.value)}
        ></TextField>
        <hr></hr>
        <TextField
          type="password"
          placeholder="password"
          value = {password}
          onChange={(event) => setPassword(event.target.value)}
        ></TextField>
        <hr></hr>
        <button type="submit" disabled={password.length < 8}> Submit</button>
      </form>
      }
    </>
  );
};

export default Register;

