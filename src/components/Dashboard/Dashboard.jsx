import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, Grid, makeStyles } from '@material-ui/core';

import Menu from '../Layout/Menu';
import SearchOption from './SearchOption';
import CardResult from './CardResult';

import useFetchData from '../../utils/useFetchData';

const useStyles = makeStyles({
    cardContainer: {
        padding: '0 20px '
    },
    root: {
        maxWidth: 300,
        width: '200px',
        margin: '20px'
    },
    media: {
        height: 140,
    },
    color: {
        color: 'red'
    },
    footer: {
        height: '50px',
    }
});


function Dashboard({ searchWord, setSearchWord }) {
    const [page, setPage] = useState(1);

    const classes = useStyles();

    const results = useFetchData(page, searchWord);

    return (
        <div className='dashboard' >
            <Grid container direction='column'>
                <Menu />
                <Grid item >
                    <SearchOption searchWord={searchWord} setSearchWord={setSearchWord} />
                </Grid>
                <Grid item container justify='center' alignItems='center' wrap='wrap' className={classes.cardContainer}>
                    {
                        results.map(result => (
                            <CardResult key={uuidv4()} result={result} />
                        ))
                    }
                </Grid>
                <Grid item container justify='center' className={classes.footer}>
                    {page !== 1 ?
                        <Button variant="text" color="primary" onClick={() => setPage(page - 1)} style={{ margin: '20px' }}>
                            Anterior
                        </Button>
                        :
                        null
                    }
                    <Button variant="text" color="primary" onClick={() => setPage(page + 1)} style={{ margin: '20px' }}>
                        Siguiente
                        </Button>
                </Grid>
            </Grid>
        </div >
    );
}

export default Dashboard;


