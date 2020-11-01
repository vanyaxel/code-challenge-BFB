import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

import Detail from './Detail';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        width: '300px',
        height: '287px',
    },
    media: {
        height: 140,
    },
    content: {
        height: '75px'
    },
    footer: {
        float: 'right'
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
                <CardContent className={classes.content}>
                    <Typography variant="body1" color="textSecondary" >
                        {result.title}
                    </Typography>
                    {
                        result.year ?
                            <Typography variant="body2" color="textSecondary"  >
                                <strong> Año:</strong>  {result.year}
                            </Typography>
                            :
                            <Typography variant="body2" color="textSecondary"  >
                                <strong> Año:</strong> No hay información
                            </Typography>
                    }
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.footer} >
                <Detail result={result} />
            </CardActions>
        </Card>
    );
}


export default CardResult;