import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import BtnMenu from './BtnMenu';

function Menu() {
    const [menuOption, setMenuOption] = useState(false);

    const handleChangeView = () => {
        setMenuOption(!menuOption);
    };

    return (
        <div>
            <Grid container justify='flex-end'>
                {
                    menuOption ?
                        <BtnMenu
                            name='inicio'
                            click={handleChangeView}
                            route='/dashboard'
                        />
                        :
                        <BtnMenu
                            name='mi colección'
                            click={handleChangeView}
                            route='/collection'
                        />
                }
            </Grid>
        </div>
    );
}

export default Menu;
