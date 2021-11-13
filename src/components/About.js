import React from 'react'
import { useHistory } from 'react-router-dom'
import { callApi } from './util';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import {Card, Paper, Typography, makeStyles, Grid, Link} from '@material-ui/core'


const About = () => {       
    return <Paper>
        <Typography variant='h3'>About Us</Typography>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
            <Grid key={1} item xs={12} sm={6} md={4} lg={3}>
                <Card raised={true}>
                    <Typography>Xavier Loera Flores</Typography>
                    <Link target="_blank" rel="noreferrer" href='https://github.com/xavierloeraflores'>GitHub</Link>
                    <Link target="_blank" rel="noreferrer" href=' https://www.linkedin.com/in/xavierloeraflores/ '>LinkedIn</Link>
                    <Link target="_blank" rel="noreferrer" href='  '>Twitter</Link>
                </Card>
            </Grid>

            <Grid key={1} item xs={12} sm={6} md={4} lg={3}>
                <Card raised={true}>
                    <Typography>Rubal Kaur</Typography>
                    <Link target="_blank" rel="noreferrer" href=' https://github.com/rubalkaur1903 '>GitHub</Link>
                    <Link target="_blank" rel="noreferrer" href='  https://www.linkedin.com/in/rubalkaur/'>LinkedIn</Link>
                    <Link target="_blank" rel="noreferrer" href='  '>Twitter</Link>
                </Card>
            </Grid>

            <Grid key={1} item xs={12} sm={6} md={4} lg={3}>
                <Card raised={true}>
                    <Typography>Jimmy dang</Typography>
                    <Link target="_blank" rel="noreferrer" href='https://github.com/soondubusoup  '>GitHub</Link>
                    <Link target="_blank" rel="noreferrer" href=' https://www.linkedin.com/in/jimmyqdang/ '>LinkedIn</Link>
                    <Link target="_blank" rel="noreferrer" href='  '>Twitter</Link>
                </Card>
            </Grid>

            <Grid key={1} item xs={12} sm={6} md={4} lg={3}>
                <Card raised={true}>
                    <Typography>Aaron Rosati</Typography>
                    <Link target="_blank" rel="noreferrer" href='https://github.com/aaronrosati  '>GitHub</Link>
                    <Link target="_blank" rel="noreferrer" href=' https://www.linkedin.com/in/aaronrosati/ '>LinkedIn</Link>
                    <Link target="_blank" rel="noreferrer" href='  '>Twitter</Link>
                </Card>
            </Grid>

        </Grid>


    </Paper>
}



export default About;