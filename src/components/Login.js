import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { callApi } from './util';

const Login = ({setToken, setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    return <>
        <h1>Login</h1>
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
            console.log('loginResp: ', loginResp)
            if(loginResp) {
                // const userResp = await callApi({url: '/users/me', token: loginResp.token});
                setToken(loginResp.token);
                // console.log(userResp, "userResp")
                setUser(username);
                if(loginResp.token) {
                    history.push('/');
                }
            }
        }}>
            <input type="text" placeholder="Enter Username" minLength={8} value={username} onChange={(event) => setUsername(event.target.value)}></input>
            <input type="password" placeholder="Enter Password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    </>
}

export default Login;