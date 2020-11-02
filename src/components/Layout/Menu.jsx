import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import BtnMenu from './BtnMenu';

function Menu() {
    return (
        <div>
            <Grid container justify='flex-end'>
                <BtnMenu
                    name='inicio'
                    route='/dashboard' />
                <BtnMenu
                    name='mi colección'
                    route='/collection'
                />
            </Grid>
        </div>
    );
}

export default Menu;
