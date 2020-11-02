import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Grid, TextField, Typography } from '@material-ui/core';
import useStyles from '../styles';

function SearchOption({ setArtist, setAlbum }) {

    const classes = useStyles();

    const [searchByArtist, setSearchByArtist] = useState('');
    const [searchByAlbum, setSearchByAlbum] = useState('');

    const handleInputArtist = e => {
        setSearchByArtist(e.target.value);
    };

    const handleInputAlbum = e => {
        setSearchByAlbum(e.target.value);
    };

    const handleSearchWord = () => {
        setArtist(searchByArtist);
        setAlbum(searchByAlbum);
        setSearchByArtist('');
        setSearchByAlbum('');
    };

    return (
        <Grid container wrap='wrap' direction='column' alignItems='flex-start'>
            <Typography variant="h2" color="primary" >
                ¿qué estas buscando?
           </Typography>
            <Grid item container>
                <TextField
                    placeholder='Buscar por artista'
                    variant='outlined'
                    className={classes.inputSearch}
                    onChange={handleInputArtist}
                    value={searchByArtist}
                />
                <TextField
                    placeholder='Buscar por albúm'
                    variant='outlined'
                    className={classes.inputSearch}
                    onChange={handleInputAlbum}
                    value={searchByAlbum}
                />
                <Button variant="contained" color="primary" size='large' className={classes.btnSearch} onClick={handleSearchWord} >
                    Buscar
            </Button>
            </Grid>
        </Grid>
    );
}

export default SearchOption;
