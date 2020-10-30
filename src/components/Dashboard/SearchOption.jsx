import React from 'react';
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

    let word;

    const handleInputChange = e => {
        word = e.target.value;
    };

    const handleSearchWord = () => {
        console.log('hola mundo');
        setSearchWord(word);
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
                />
                <Button variant="contained" color="primary" size='large' className={classes.btnSearch} onClick={handleSearchWord} >
                    Buscar
            </Button>
            </Grid>
        </Grid>
    );
}

export default SearchOption;
