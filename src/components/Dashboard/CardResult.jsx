import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
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

function CardResult({ result }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={result.cover_image}
                    title="imagen"
                />
                <CardContent>
                    <Typography variant="h5" color="textSecondary" >
                        {result.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary"  >
                        {result.year}
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