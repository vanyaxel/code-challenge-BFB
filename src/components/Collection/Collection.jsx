import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import '../styles.css';
import CardCollection from './CardCollection';
import Menu from '../Layout/Menu';

function Collection() {

    return (
        <div className='dashboard' >
            <Grid container direction='column' >
                <Menu />
                <Grid item container direction='column' className='collection-view'>
                    <Grid item  >
                        <Typography className='title-collection' color="primary">
                            mi colección
                    </Typography>
                    </Grid>
                    <CardCollection />
                </Grid>
            </Grid>
        </div >
    );
}

export default Collection;
