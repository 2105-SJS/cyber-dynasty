import React, { useState } from "react";
import { useHistory } from "react-router";
// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";
import { callApi } from "./util";


const Register = ({ setUser, token, setToken }) => {
//   const { isLoggedIn, setIsLoggedIn, setUserToken, setUser } =
    // useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
  const history = useHistory();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const user = await callApi({ 
      url: '/users/register',
      method: "POST",
      body: {
          firstName,
          lastName,
          email,
          username,
          password
      } });
      console.log(user, "it worked");
      if (user) {
        localStorage.setItem("token", token);
        setToken(user.token);
        setUser(user.username);
        history.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <> 
      <h1>Hi there, please register below! </h1>
      <form onSubmit={handleRegister}>
      <input
          type="text"
          placeholder="firstName"
          value = {firstName}
          onChange={(event) => setFirstName(event.target.value)}
        ></input>
        <hr></hr>  
        <input
          type="text"
          placeholder="lastName"
          value = {lastName}
          onChange={(event) => setLastName(event.target.value)}
        ></input>
        <hr></hr>  
        <input
          type="text"
          placeholder="email"
          value = {email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <hr></hr>  
        <input
          type="text"
          placeholder="username"
          value = {username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <hr></hr>
        <input
          type="password"
          placeholder="password"
          value = {password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <hr></hr>
        <button type="submit">Submit</button>
      </form>
      
    </>
  );
};

export default Register;

