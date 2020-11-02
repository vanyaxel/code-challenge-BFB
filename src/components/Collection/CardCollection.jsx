import React from 'react';
import { v4 as uuid4 } from 'uuid';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import useStyles from '../styles';
import { useFetchCollection } from '../../utils/useFetchData';

export default function CardCollection() {
    const classes = useStyles();

    const collection = useFetchCollection();

    const bull = <span className={classes.bulletCard}>•</span>;

    return (
        <Grid container justify='space-between' className={classes.cardContainer}  >
            {
                collection.map(release => (
                    <Grid item container justify='space-between' sm={12} md={6}>
                        <Card key={release.id} className={classes.cardCollection} variant="outlined" >
                            <CardContent>
                                <table >
                                    <tbody>
                                        <tr>
                                            <td className={classes.colTitleCollection}>
                                                <Typography className={classes.titleInfoCollection} color="secondary">
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
                                            <td className={classes.colTitleCollection}>
                                                <Typography className={classes.titleInfoCollection} color="secondary">
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
                                            <td className={classes.colTitleCollection}>
                                                <Typography className={classes.titleInfoCollection} color="secondary">
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
                                            <td className={classes.colTitleCollection}>
                                                <Typography className={classes.titleInfoCollection} color="secondary">
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
                                            <td className={classes.colTitleCollection}>
                                                <Typography className={classes.titleInfoCollection} color="secondary">
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
                                            <td className={classes.colTitleCollection}>
                                                <Typography className={classes.titleInfoCollection} color="secondary">
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
                                            <td className={classes.colTitleCollection}>
                                                <Typography className={classes.titleInfoCollection} color="secondary">
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