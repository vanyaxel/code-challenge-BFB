import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { Button, Grid } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';

import Menu from '../Layout/Menu';
import SearchOption from './SearchOption';
import CardResult from './CardResult';
import '../styles.css';
import useStyles from '../styles';

import { useFetchResults } from '../../utils/useFetchData';

toast.configure();

function Dashboard({ artist, setArtist, album, setAlbum }) {
    const [page, setPage] = useState(1);

    const classes = useStyles();

    const results = useFetchResults(page, artist, album);

    return (
        <div className='dashboard' >
            <Grid container direction='column'>
                <Menu />
                <Grid item container direction='column' className='collection-view'>
                    <Grid item className={classes.searchContainer}>
                        <SearchOption setArtist={setArtist} setAlbum={setAlbum} />
                    </Grid>
                    <Grid item container justify='left' spacing={4} >
                        {results ?
                            results.map(result => (
                                <Grid item container justify='space-around' sm={6} md={3} xg={2}>
                                    <CardResult key={uuidv4()} result={result} />
                                </Grid>
                            ))
                            :
                            <p>buscando</p>
                        }
                    </Grid>
                    <Grid item container justify='center' className={classes.pagination}>
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


