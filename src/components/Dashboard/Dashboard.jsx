import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, Grid, makeStyles } from '@material-ui/core';

import Menu from './Menu';
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

                <Grid>
                    {page !== 1 ?
                        <Button variant="contained" color="primary" onClick={() => setPage(page - 1)}>
                            anterior
                    </Button>
                        :
                        null
                    }
                    <Button variant="contained" color="primary" onClick={() => setPage(page + 1)}>
                        siguiente
                    </Button>
                </Grid>
            </Grid>
        </div >
    );
}

export default Dashboard;


