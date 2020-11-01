import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    formContainer: {
        backgroundColor: 'rgba(0,0,0, .70)',
        width: '270px',
        padding: '20px',
        height: '400px',
        display: 'flex',
        alignItems: 'flex-start',
    },
    header: {
        margin: '35px',
        textAlign: 'center'
    },
    inputContainer: {
        maxWidth: '500px !important',
        flexBasis: 'inherit'
    },
    input: {
        marginBottom: '10px'
    },
    btnLogin: {
        margin: '30px'
    },
    btnLink: {
        textDecoration: 'none'
    },
    color: {
        color: 'red'
    }
});

function FormLogin() {
    const classes = useStyles();

    return (
        <div className={classes.formContainer}>
            <Grid
                container
                direction='column'
                spacing={2}
                sm={12} md={12} lg={12}
                justify='center'
                alignItems='center'
                className={classes.inputContainer}
            >
                <Grid item className={classes.header}>
                    <Typography gutterBottom variant="h4" color='primary'>
                        DISCOGS
                    </Typography>
                    <Typography variant="h5" gutterBottom color='primary'>
                        Inicia Sesión
                    </Typography>
                </Grid>
                <Grid item container justify='center'>
                    <TextField
                        placeholder='Nombre'
                        variant='outlined'
                        className={classes.input}
                    />
                    <TextField
                        placeholder='Contraseña'
                        type='password'
                        variant='outlined'
                        className={classes.input}
                    />
                </Grid>
                <Grid className={classes.btnLogin}>
                    <Link to='/dashboard' className={classes.btnLink}>
                        <Button variant="contained" color="primary" >
                            Entrar
                    </Button>
                    </Link>
                </Grid>
            </Grid>
        </div >
    );
}

export default FormLogin;
