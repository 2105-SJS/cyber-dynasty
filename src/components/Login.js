import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { callApi } from './util';
import { UserContext } from "../context/userContext";
import {Typography, Button, TextField, Paper} from '@material-ui/core'

const Login = ({ setUser }) => {
    const { isLoggedIn, setIsLoggedIn, setToken } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    return <Paper elevation={3}>
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
                    if(loginResp && loginResp.token) {
                        setToken(loginResp.token);
                        localStorage.setItem("token", loginResp.token);
                        setIsLoggedIn(true);
                        setUser(username);
                        alert(`Hello, you are logged in as ${username} `);
                        history.push('/products');
                    }
                }}>
                    <TextField type="text" placeholder="Enter Username" minLength={8} value={username} onChange={(event) => setUsername(event.target.value)}></TextField>
                    <TextField type="password" placeholder="Enter Password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)}></TextField>
                    <Button type="submit">Submit</Button>
                </form>

        }
    </Paper>
}

export default Login;