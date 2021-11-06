import React from 'react'
import { useHistory } from 'react-router-dom'
import { callApi } from './util';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';


const Profile = ({ user, setUser }) => {
    const { token } = useContext(UserContext)
    const history = useHistory();
    
    const handleSubmit = async () => {
        console.log('token in profile', token)
        const profileResp = await callApi( {
            url: '/users/me',
            token
        });
        console.log('user Profile response: ', profileResp);
        setUser(user.username)
        localStorage.setItem("token", token)
    }
    // if(!token) {
        //     history.push('/')
        // }
        
        
        return <>
    <h1>My Profile</h1>
    <form onSubmit={ async (event) => {
        event.preventDefault();
        await handleSubmit();
    }}>
        <button type="submit">My Orders</button>
    </form>

    </>
}



export default Profile;