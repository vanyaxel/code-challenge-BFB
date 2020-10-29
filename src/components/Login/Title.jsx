import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
        backgroundColor: 'rgba(0,0,0,0.70)',
        padding: '30px 40px'
    },
    icon: {
        fontSize: '100px'
    }
});

function Title() {
    const classes = useStyles();

    return (
        <div className={classes.title}>
            <Grid
                container
                alignItems='center'
                justify='space-between'
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
                    <Link to='/login'>
                        <PlayCircleFilledIcon color='primary' className={classes.icon} />
                    </Link>
                </Grid>
            </Grid>
        </div >
    );
}

export default Title;
