/* import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Grid, TextField, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    inputSearch: {
        width: '300px',
        margin: '0 30px 15px 0'
    },
    btnSearch: {
        height: '53px',
        marginBottom: '50px'
    },
});

function SearchOption({ searchWord, setSearchWord }) {

    const classes = useStyles();

    const [word, setWord] = useState('');

    const handleInputChange = e => {
        setWord(e.target.value);
    };

    const handleSearchWord = () => {
        setSearchWord(word);
        setWord('');
    };

    console.log('esta palabra deberia ser word', searchWord);
    return (
        <Grid container wrap='wrap' direction='column' alignItems='flex-start'>
            <Typography variant="h4" >
                Bienvenid@ NOMBRE
           </Typography>
            <Typography variant="h2" color="primary" >
                ¿qué estas buscando?
           </Typography>
            <Grid item container >
                <TextField
                    placeholder='Buscar por artista o por albúm'
                    variant='outlined'
                    className={classes.inputSearch}
                    onChange={handleInputChange}
                    value={word}
                />
                <Button variant="contained" color="primary" size='large' className={classes.btnSearch} onClick={handleSearchWord} >
                    Buscar
            </Button>
            </Grid>
        </Grid>
    );
}

export default SearchOption;
 */

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Grid, TextField, Typography, makeStyles } from '@material-ui/core';
import { WorkOutlineOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
    inputSearch: {
        width: '300px',
        margin: '0 30px 15px 0'
    },
    btnSearch: {
        height: '53px',
        marginBottom: '50px'
    },
});

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
            <Typography variant="h4" >
                Bienvenid@ NOMBRE
           </Typography>
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
