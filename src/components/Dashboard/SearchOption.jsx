import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
function SearchOption() {
    return (
        <Grid container wrap='wrap' direction='column' alignItems='flex-start' xs={12} sm={12}>
            <Typography variant="h2" color="primary" >
                ¿qué estas buscando?
           </Typography>
            <Grid item container spacing={1}>
                <TextField
                    placeholder='Buscar por artista o por albúm'
                    variant='outlined'
                />
                <Button variant="contained" color="primary">
                    Buscar
            </Button>
            </Grid>

        </Grid>
    );
}

export default SearchOption;
