import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
const Navbar =()=>{
    const {isLoggedIn, setIsLoggedIn, setToken} = useContext(UserContext)


    return(
        <>
        <Link to='/home'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/products'>Products</Link>
        {isLoggedIn ? <Link to='/home' onClick={()=>{
            setIsLoggedIn(false)
            setToken('')
            localStorage.setItem('token', '')

        }}>Log out</Link>:
        <>
            <Link to='/accounts/register'>Register</Link>
            <Link to='/accounts/login'>Login</Link>
        </>
        }
        </>
    )
}

export default Navbar;









