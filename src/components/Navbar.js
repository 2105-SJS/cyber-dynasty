import React, {useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
const Navbar =()=>{
    const {isLoggedIn, setIsLoggedIn, setToken} = useContext(UserContext)
    const history = useHistory();

    return(
        <>
        <Link to='/home'>Home</Link>
        <Link to='/accounts'>Profile</Link>
        <Link to='/products'>Products</Link>
        <Link t0='/orders'>Cart</Link>
        {isLoggedIn ? <button onClick={() => {
            console.log("Clicked")
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            setIsLoggedIn(false);

            setToken("")

            history.push("/");
        }}
        > Logout </button>:  
        <>
            <Link to='/accounts/register'>Register</Link>
            <Link to='/accounts/login'>Login</Link>
        </>
        }
        </>
    
    )
}
console.log()

export default Navbar;









