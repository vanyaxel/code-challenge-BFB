import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import bckInitView from '../../images/bck-initView.png';
import Detail from './Detail';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        width: '200px',
        margin: '20px'
    },
    media: {
        height: 140,
    },
    color: {
        color: 'red'
    }
});

function CardResult() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={bckInitView}
                    title="imagen"
                />
                <CardContent>
                    <Typography variant="h5" color="textSecondary" >
                        Nirvana
                    </Typography>
                    <Typography variant="body2" color="textSecondary"  >
                        'ejemplo de album'
                    </Typography>
                    <Typography variant="body2" color="textSecondary"  >
                        20 enero 1980
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Detail />
            </CardActions>
        </Card>
    );
}


export default CardResult;