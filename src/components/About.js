import React from 'react'
import { useHistory } from 'react-router-dom'
import { callApi } from './util';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import {  Paper, Typography, makeStyles, Grid, Link} from '@material-ui/core'
import Image from 'material-ui-image'

const useStyles = makeStyles({
    profiles :{
        padding:'1rem',
        margin:'1rem',
        display:'flex',
        flexFlow: 'column nowrap'
    },
    info:{
        display:'flex',
        flexFlow: 'column nowrap',
        alignItems:'center'

    },
    image:{
        borderRadius:'50%'
    },
    page:{
        padding:'2rem'
    }
})


const About = () => {   
    const classes = useStyles()     
    return <Paper className={classes.page}>
        <Typography variant='h3'>About Us</Typography>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
            <Grid key={1} item xs={12} sm={6}  >
                < div className = {classes.profiles} >
                    <Image className={classes.image} src='https://i.imgur.com/gJkPruS.jpeg ' />
                    <div className={classes.info}> 
                    <Typography>Xavier Loera Flores</Typography>
                    <Link target="_blank" rel="noreferrer" href='https://github.com/xavierloeraflores'>GitHub</Link>
                    <Link target="_blank" rel="noreferrer" href=' https://www.linkedin.com/in/xavierloeraflores/ '>LinkedIn</Link>
                    <Link target="_blank" rel="noreferrer" href='  '>Twitter</Link>
                    </div>
                </ div >
            </Grid>

            <Grid key={1} item xs={12} sm={6}  >
                < div className = {classes.profiles} >
                    <Image className={classes.image} src=' https://media-exp1.licdn.com/dms/image/C5603AQEWt6PtwPhXmQ/profile-displayphoto-shrink_800_800/0/1633635607091?e=1642032000&v=beta&t=BtB9z6EisFYQJb9gMYgfnL4wHLA7FyoauccNcmKaovU' />
                    <div className={classes.info}> 
                    <Typography>Rubal Kaur</Typography>
                    <Link target="_blank" rel="noreferrer" href=' https://github.com/rubalkaur1903 '>GitHub</Link>
                    <Link target="_blank" rel="noreferrer" href='  https://www.linkedin.com/in/rubalkaur/'>LinkedIn</Link>
                    <Link target="_blank" rel="noreferrer" href='  '>Twitter</Link>
                    </div>
                </ div >
            </Grid>

            <Grid key={1} item xs={12} sm={6}  >
                < div className = {classes.profiles} >
                    <Image className={classes.image} src=' https://media-exp1.licdn.com/dms/image/C5603AQEKV1N6cOCQ7A/profile-displayphoto-shrink_800_800/0/1579639199101?e=1642032000&v=beta&t=hHx18BtVdKriV5e8vPXG5212KVVk0fqSuu2Fpzr_kok' />
                    <div className={classes.info}> 
                    <Typography>Jimmy dang</Typography>
                    <Link target="_blank" rel="noreferrer" href='https://github.com/soondubusoup  '>GitHub</Link>
                    <Link target="_blank" rel="noreferrer" href=' https://www.linkedin.com/in/jimmyqdang/ '>LinkedIn</Link>
                    <Link target="_blank" rel="noreferrer" href='  '>Twitter</Link>
                    </div>
                </ div >
            </Grid>

            <Grid key={1} item xs={12} sm={6}  >
                < div className = {classes.profiles} >
                    <Image className={classes.image} src='https://media-exp1.licdn.com/dms/image/C5603AQEq-leTw4cP_Q/profile-displayphoto-shrink_800_800/0/1599634377108?e=1642032000&v=beta&t=AJfFntDvXhqrVtUa3hkFpkjXwmEWzHvhEh58TeojDJ4 ' />
                    <div className={classes.info}> 
                    <Typography>Aaron Rosati</Typography>
                    <Link target="_blank" rel="noreferrer" href='https://github.com/aaronrosati  '>GitHub</Link>
                    <Link target="_blank" rel="noreferrer" href=' https://www.linkedin.com/in/aaronrosati/ '>LinkedIn</Link>
                    <Link target="_blank" rel="noreferrer" href='  '>Twitter</Link>
                    </div>
                </ div >
            </Grid>

        </Grid>


    </Paper>
}



export default About;