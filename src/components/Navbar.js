import React, {useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import {AppBar, Typography, Toolbar} from '@material-ui/core'
import { makeStyles } from "@material-ui/core";
import {Icon} from '@material-ui/core'

const styles ={
    nav:{
        width:'100%',
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-between',
        alignItems:'center'
    },
    links:{
        color:'#fff',
        margin:'.5rem',
        textDecoration:'none',
        '&:hover':{
            textDecoration:'underline'
        }
    },
    icons:{
        color:'#fff',
        fontSize:'1.5rem'
    },
    logout:{
        color:'red',
        margin:'.5rem',
        textDecoration:'none',
        background:'none',
        padding:'.25rem',
        fontSize:'1.5rem',
        borderRadius:'20%',
        '&:hover':{
            textDecoration:'underline',
        }
    },
    container:{
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-between',
        alignItems:'center'
    }

}
const useStyles = makeStyles(styles)

const Navbar =()=>{
    const {isLoggedIn, setIsLoggedIn, setToken} = useContext(UserContext)
    const history = useHistory();
    const classes = useStyles()

    return(
        <AppBar position="static">
            <Toolbar >
            <Typography variant='h5' className={classes.nav}>
                <div className={classes.container}>
                    <Link to='/home'className={classes.links}>Home</Link>
                    <Link to='/products'className={classes.links}>Products</Link>
                    <Link to='/cart'className={classes.links}><Icon className={classes.icons}>shopping cart</Icon></Link>
                </div>
                {isLoggedIn ? 
                    <div className={classes.container}>
                        <Link to='/accounts'className={classes.links}><Icon className={classes.icons}>account_circle</Icon></Link>
                        <button className={classes.logout} onClick={() => {
                        console.log("Clicked")
                        localStorage.removeItem("token");
                        localStorage.removeItem("username");
                        setIsLoggedIn(false);
                        setToken("");
                        history.push("/");
                    }}
                    > Logout </button>  
                    </div>:
                    <div className={classes.container}>
                        <Link to='/accounts/register'className={classes.links}>Register</Link>
                        <Link to='/accounts/login'className={classes.links}>Login</Link>
                    </div>
                }
            </Typography>
        </Toolbar>
        </AppBar>
    
    )
}
console.log()

export default Navbar;









