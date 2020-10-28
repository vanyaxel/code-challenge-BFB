import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, TextField, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    inputContainer: {
        marginLeft: '5%',
    },
    input: {
        width: '300px',
        margin: '0 30px 15px 0'
    },
    btnSearch: {
        height: '53px'
    },

});

function SearchOption() {

    const classes = useStyles();

    return (
        <Grid container wrap='wrap' direction='column' alignItems='flex-start' xs={12} sm={12}>
            <Typography variant="h2" color="primary" >
                ¿qué estas buscando?
           </Typography>
            <Grid item container className={classes.inputContainer} justify='flex-start'>
                <TextField
                    placeholder='Buscar por artista o por albúm'
                    variant='outlined'
                    className={classes.input}
                />
                <Button variant="contained" color="primary" size='large' className={classes.btnSearch}>
                    Buscar
            </Button>
            </Grid>

        </Grid>
    );
}

export default SearchOption;
