import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{

    return(
        <>
        <Link to='/home'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/products'>Products</Link>
        <Link to='/accounts/register'>Register</Link>
        <Link to='/accounts/login'>Login</Link>
        </>
    )
}

export default Navbar;









