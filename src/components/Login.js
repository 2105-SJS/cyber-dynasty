import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { callApi } from './util';
import { UserContext } from "../context/userContext";
import {Typography, Button, TextField} from '@material-ui/core'

const Login = ({ setUser, token}) => {
    const { isLoggedIn, setIsLoggedIn, setToken } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState("");
    const history = useHistory();

    return <>
        <Typography variant='h3'>Login</Typography>
        {
            isLoggedIn ? 
            history.push('/home') :
                <form onSubmit={async (event) => {
                    event.preventDefault();
                    const loginResp = await callApi({
                        url: '/users/login',
                        method: "POST",
                        body: {
                            username,
                            password
                        }
                    });
                    console.log({username, password})
                    console.log('mangoLogin: ', loginResp)
                    if(loginResp) {
                        setToken(loginResp.token);
                        setIsLoggedIn(true)
                        setUser(username);
                        if(loginResp.token) {
                            alert(`Hello, you are logged in as ${username} `)
                            history.push('/home');
                        }
                    }
                }}>
                    <TextField type="text" placeholder="Enter Username" minLength={8} value={username} onChange={(event) => setUsername(event.target.value)}></TextField>
                    <TextField type="password" placeholder="Enter Password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)}></TextField>
                    <Button type="submit">Submit</Button>
                </form>

        }
    </>
}

export default Login;