import React from 'react';
import { Link } from 'react-router-dom';

import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btnCollection: {
        margin: '30px',
        position: 'relative',
        right: '3%',
        fontSize: '18px',
        textTransform: 'lowercase'
    },
    btnLink: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

function BtnMenu(props) {

    const classes = useStyles();

    return (
        <Button onClick={props.click} className={classes.btnCollection} color='primary' >
            <Link to={props.route} className={classes.btnLink}>
                {props.name}
            </Link>
        </Button>
    );

}

export default BtnMenu;
