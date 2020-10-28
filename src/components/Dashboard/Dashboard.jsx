import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchOption from './SearchOption';
import { Button, Grid, makeStyles } from '@material-ui/core';
import CardResult from './CardResult';

const useStyles = makeStyles({
    btnCollection: {
        margin: '30px',
        position: 'relative',
        right: '3%',
        fontSize: '18px'
    },
    cardContainer: {
        padding: '0 20px '
    }
});

function Dashboard() {
    const classes = useStyles();

    const [menuOption, setMenuOption] = useState(false);

    const handleChangeView = () => {
        setMenuOption(!menuOption);
    };

    return (
        <div className='dashboard' >
            <Grid container direction='column'>
                <Grid item container justify='flex-end'>
                    {menuOption ? <Button variant="text" color="primary" className={classes.btnCollection} onClick={handleChangeView}>
                        mi colección
                        </Button> :
                        <Button variant="text" color="primary" className={classes.btnCollection} onClick={handleChangeView}>
                            inicio
                        </Button>
                    }
                    <Button variant="text" color="primary" className={classes.btnCollection} onClick={handleChangeView}>
                        mi colección
                        </Button>
                </Grid>
                <Grid item >
                    <SearchOption />
                </Grid>
                <Grid item container justify='center' alignItems='center' wrap='wrap' className={classes.cardContainer}>
                    <CardResult />
                </Grid>
            </Grid>
        </div >
    );
}

export default Dashboard;
