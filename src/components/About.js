import React from 'react'
import { useHistory } from 'react-router-dom'
import { callApi } from './util';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import {Paper, Typography, makeStyles, Grid, Link} from '@material-ui/core'


const Profile = () => {       
    return <Paper>
        <Typography variant='h3'>About Us</Typography>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
            <Grid key={1} item xs={12} sm={6} md={4} lg={3}>
                <Card>
                    <Typography>Xavier Loera Flores</Typography>
                    <Link href='#'>GitHub</Link>
                    <Link href='#'>LinkedIn</Link>
                    <Link href='#'>Twitter</Link>
                </Card>
            </Grid>
        </Grid>


    </Paper>
}



export default Profile;