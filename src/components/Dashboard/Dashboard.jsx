import React from 'react';
import SearchOption from './SearchOption';
import { Button, Grid, makeStyles } from '@material-ui/core';
import CardMusic from './CardMusic';

const useStyles = makeStyles({
    btnCollection: {
        margin: '30px',
        position: 'relative',
        right: '3%',
        fontSize: '18px'
    },
});

function Dashboard() {
    const classes = useStyles();

    return (
        <div className='dashboard' >
            <Grid container spacing={1} direction='column'>
                <Grid item container justify='flex-end'>
                    <Button variant="text" color="primary" className={classes.btnCollection}>
                        mi colección
                    </Button>
                </Grid>
                <Grid item >
                    <SearchOption />
                </Grid>


            </Grid>
        </div >
    );
}

export default Dashboard;
