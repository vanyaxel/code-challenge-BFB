import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, Grid, makeStyles } from '@material-ui/core';

import Menu from '../Layout/Menu';
import SearchOption from './SearchOption';
import CardResult from './CardResult';
import '../styles.css';

import { useFetchData } from '../../utils/useFetchData';

const useStyles = makeStyles({
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
                <Grid item container direction='column' className='collection-view'>
                    <Grid item >
                        <SearchOption searchWord={searchWord} setSearchWord={setSearchWord} />
                    </Grid>
                    <Grid item container justify='left' spacing={4} >
                        {
                            results.map(result => (
                                <Grid item container justify='space-around' sm={6} md={3} xg={2}>
                                    <CardResult key={uuidv4()} result={result} />
                                </Grid>
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
            </Grid>
        </div >
    );
}

export default Dashboard;


