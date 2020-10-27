import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'rgba(0,0,0,0.70)',
        padding: '30px 40px'
    },
    icon: {
        fontSize: '100px'
    }
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                alignItems='center'
                justify='space-between'
            >
                <Grid item xs={12} sm={10} md={10} lg={10} >
                    <Typography gutterBottom variant="h1" color='primary' >
                        DISCOGS
                    </Typography>
                    <Typography variant="h4" color='primary' gutterBottom>
                        Biblioteca de música
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2} sm container alignItems='flex-start'>
                    <Link to='/dashboard'>
                        <PlayCircleFilledIcon color='primary' className={classes.icon} />
                    </Link>
                </Grid>
            </Grid>
        </div >
    );
}
