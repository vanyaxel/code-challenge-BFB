import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from '../styles';
import { Grid, Typography } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import '../styles.css';

function InitialView() {
    const classes = useStyles();
    return (
        <div className='initial-view'>
            <Grid
                container
                alignItems='center'
                justify='space-between'
                className={classes.titleDiscogs}
            >
                <Grid item xs={12} sm={10} >
                    <Typography gutterBottom variant="h1" color='primary' >
                        DISCOGS
                    </Typography>
                    <Typography variant="h3" color='primary' gutterBottom>
                        Biblioteca de música
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2} container alignItems='flex-start'>
                    <Link to='/dashboard'>
                        <PlayCircleFilledIcon color='primary' className={classes.icon} />
                    </Link>
                </Grid>
            </Grid>
        </div >
    );
}

export default InitialView;
