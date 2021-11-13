import React, {useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import {AppBar, Typography, Toolbar} from '@material-ui/core'
import { makeStyles } from "@material-ui/core";
import {Icon} from '@material-ui/core'

const styles ={
    footer:{
        width:'100%',
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'center',
        backgroundColor:'#7289DA',
        padding:'2rem',
        minHeight:'10vh'
    },
    links:{
        color:'#000',
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
        <div className={classes.footer}>
            <Typography variant='h5' className={classes.nav}>
                <div className={classes.container}>
                    <Link to='/about'className={classes.links}>About</Link>
                </div>
            </Typography>
        </div>
    
    )
}


export default Navbar;









