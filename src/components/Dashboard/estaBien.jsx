import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Grid, makeStyles } from '@material-ui/core';

import CardResult from './CardResult';
import Menu from './Menu';
import SearchOption from './SearchOption';
import bckInitView from '../../images/bck-initView.png';
import Detail from './Detail';

const useStyles = makeStyles({
    cardContainer: {
        padding: '0 20px '
    },


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

function Dashboard() {
    const classes = useStyles();

    const [results, setResults] = useState([]);
    const [pagination, setPagination] = useState([]);

    const [searchWord, setSearchWord] = useState('kean');

    const url1 = 'https://api.discogs.com/database/search?q=';
    const url2 = '&key=APfaGNnkOUxUvwAZCJcf&secret=qoBhqMCwayvzZixqBwqQFgIbqSWZaBWY';

    const discogsUrl = url1 + searchWord + url2;

    useEffect(() => {

        fetch(discogsUrl)
            .then(res => res.json())
            .then(data => {
                setResults(data.results);
                setPagination(data.pagination);
            });
    }, []);

    console.log('results', results);
    console.log('pagination', pagination);

    return (
        <div className='dashboard' >
            <Grid container direction='column'>
                <Menu />
                <Grid item >
                    <SearchOption />
                </Grid>
                <Grid item container justify='center' alignItems='center' wrap='wrap' className={classes.cardContainer}>
                    {
                        results.map(result => (
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={result.cover_image}
                                        title="imagen"
                                    />
                                    <CardContent>
                                        <Typography variant="body1" color="textSecondary" >
                                            {result.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary"  >
                                            {result.type}
                                        </Typography>
                                        {result.country ?
                                            <Typography variant="body2" color="textSecondary"  >
                                                {result.country}
                                            </Typography>
                                            :
                                            <Typography variant="body2" color="textSecondary"  >
                                                no hay informacion
                                            </Typography>
                                        }
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Detail />
                                </CardActions>
                            </Card>
                        ))
                    }
                </Grid>
            </Grid>
        </div >
    );
}

export default Dashboard;
