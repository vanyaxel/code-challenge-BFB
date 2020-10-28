import React from 'react';
import '../styles.css';

import Grid from '@material-ui/core/Grid';
import FormLogin from './FormLogin';

function Login() {
    return (
        <div className='login-view'>
            <Grid container spacing={1} lg={12} justify='center' className='prueba' alignItems='center'>
                <FormLogin />
            </Grid>
        </div >
    );
}

export default Login;
