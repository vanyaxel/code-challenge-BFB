import React from 'react';

import { Grid, makeStyles, Typography } from '@material-ui/core';

import CardResult from '../Dashboard/CardResult';
import Menu from '../Layout/Menu';

const useStyles = makeStyles({
    cardContainer: {
        padding: '0 20px '
    }
});

function Collection() {
    const classes = useStyles();

    return (
        <div className='dashboard' >
            <Grid container direction='column'>
                <Menu />
                <Grid item >
                    <Typography variant="h2" color="primary">
                        mi colección
                    </Typography>
                </Grid>
                <Grid item container justify='center' alignItems='center' wrap='wrap' className={classes.cardContainer}>
                    <CardResult />
                </Grid>
            </Grid>
        </div >
    );
}

export default Collection;
