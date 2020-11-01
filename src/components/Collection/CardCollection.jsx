import React from 'react';
import { v4 as uuid4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { useFetchCollection } from '../../utils/useFetchData';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: '100%',
        height: 'fit-content',
        border: 'solid 2px #B5FD0D',
        background: 'none',
        boxShadow: '0px 0px 4px 2px #B5FD0D',
        margin: '0 25px 25px 0'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(1.3)',
        color: '#ffd400'
    },
    colTitle: {
        width: '75px',
    },
    titleInfo: {
        fontSize: '14px',
        fontWeight: 500,
        color: '#ffd400',
        margin: 0,
    },
    textInfo: {
        fontSize: 14,
        margin: 0,
        color: '#ffffff',
    },
    cardContainer: {
        padding: '0',
    }
});

export default function CardCollection() {
    const classes = useStyles();

    const collection = useFetchCollection();
    const bull = <span className={classes.bullet}>•</span>;

    console.log('collection', collection);
    return (
        <Grid container justify='space-between' className={classes.cardContainer}  >
            {
                collection.map(release => (
                    <Grid item container justify='space-between' sm={12} md={6}>
                        <Card key={release.id} className={classes.root} variant="outlined" >
                            <CardContent>
                                <table >
                                    <tbody>
                                        <tr>
                                            <td className={classes.colTitle}>
                                                <Typography className={classes.titleInfo} color="secondary">
                                                    Artista:
                                        </Typography>
                                            </td>
                                            <td>
                                                <Typography className={classes.textInfo} color="secondary">
                                                    {release.basic_information.artists[0].name}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.colTitle}>
                                                <Typography className={classes.titleInfo} color="secondary">
                                                    Titulo:
                                        </Typography>
                                            </td>
                                            <td>
                                                <Typography className={classes.textInfo} color="secondary">
                                                    {release.basic_information.title}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.colTitle}>
                                                <Typography className={classes.titleInfo} color="secondary">
                                                    Año:
                                        </Typography>
                                            </td>
                                            <td>
                                                <Typography className={classes.textInfo} color="secondary">
                                                    {release.basic_information.year}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.colTitle}>
                                                <Typography className={classes.titleInfo} color="secondary">
                                                    Fecha de adición:
                                        </Typography>
                                            </td>
                                            <td>
                                                <Typography className={classes.textInfo} color="secondary">
                                                    {release.date_added}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.colTitle}>
                                                <Typography className={classes.titleInfo} color="secondary">
                                                    Formato:
                                        </Typography>
                                            </td>
                                            <td>
                                                <Typography className={classes.textInfo} color="secondary">
                                                    {release.basic_information.formats[0].name}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.colTitle}>
                                                <Typography className={classes.titleInfo} color="secondary">
                                                    Género(s):
                                        </Typography>
                                            </td>
                                            <td>
                                                <Typography className={classes.textInfo} color="secondary">
                                                    {bull}{release.basic_information.genres.map(genre =>
                                                        <span key={uuid4()} className={classes.textInfo} color="secondary">
                                                            {genre}{bull}
                                                        </span>
                                                    )}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.colTitle}>
                                                <Typography className={classes.titleInfo} color="secondary">
                                                    Estilo(s):
                                        </Typography>
                                            </td>
                                            <td>
                                                <Typography className={classes.textInfo} color="secondary">
                                                    {bull}{release.basic_information.styles.map(style =>
                                                        <span key={uuid4()} className={classes.textInfo} color="secondary">
                                                            {style}{bull}
                                                        </span>
                                                    )}
                                                </Typography>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>
                    </Grid >

                ))
            }
        </Grid>
    );
}