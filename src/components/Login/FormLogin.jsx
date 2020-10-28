import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
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
    input: {
        marginBottom: '10px'
    },
    btnLogin: {
        margin: '30px'
    },
    btn: {
        textDecoration: 'none'
    }
});

function FormLogin() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                direction='column'
                spacing={2}
                sm={12} md={12} lg={12}
                justify='center'
                alignItems='center'
            >
                <Grid item className={classes.header}>
                    <Typography gutterBottom variant="h4" color='primary'>
                        DISCOGS
                    </Typography>
                    <Typography variant="h5" gutterBottom color='primary'>
                        Inicia Sesión
                    </Typography>
                </Grid>
                <Grid className={classes.inputContainer}>
                    <TextField
                        id="filled-basic"
                        label="Nombre de usuario" variant="outlined" color='default' className={classes.input} />
                    <Typography variant="h5" gutterBottom color='primary'>
                    </Typography>
                    <TextField
                        id="filled-basic"
                        label="Contraseña" variant="outlined" color='primary' type="password" className={classes.input} />
                </Grid>
                <Grid className={classes.btnLogin}>
                    <Link to='/dashboard' className={classes.btn}>
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
