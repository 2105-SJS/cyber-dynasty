import React from 'react'
import { useHistory } from 'react-router-dom'
import { callApi } from './util';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import {Paper, Typography, makeStyles} from '@material-ui/core'


const Profile = ({ user, setUser }) => {
    const { token } = useContext(UserContext)
    const history = useHistory();
    
    const handleSubmit = async () => {
        const profileResp = await callApi( {
            url: '/users/me',
            token
        });
        setUser(user.username)
        localStorage.setItem("token", token)
    }
           
    return <Paper>
        <h1>My Profile</h1>
        <form onSubmit={ async (event) => {
            event.preventDefault();
            await handleSubmit();
        }}>
            <button type="submit">My Orders</button>
        </form>

    </Paper>
}



export default Profile;