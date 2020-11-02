import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, Grid, Typography } from '@material-ui/core';
import { v4 as uuid4 } from 'uuid';

import { postReleases } from '../../utils/fectchPost';
import useStyles from '../styles';

export default function Detail({ result }) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const bull = <span className={classes.bulletDetail}>•</span>;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddToCollection = id => {
        setOpen(false);
        postReleases(id);
    };

    return (
        <Grid container>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                Ver más
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={{ paper: classes.dialog }}
            >
                <Grid container justify='space-between'>
                    <DialogTitle id="alert-dialog-title" className={classes.header} >{"Discogs"}</DialogTitle>

                    <DialogActions>
                        <Button onClick={handleClose} className={classes.header}>
                            X
                    </Button>
                    </DialogActions>
                </Grid>

                <DialogContent>
                    <Grid item container direction='column'>
                        <Grid item container alignItems='center'>
                            <img src={result.thumb} alt={result.cover_image} />
                            <Grid item >
                                <Typography className={classes.titleInfoDetail} color="TextSecondary">
                                    {result.title}
                                </Typography>
                                <Typography className={classes.titleInfoDetail} color="TextSecondary">
                                    {result.country}
                                </Typography>
                                <Typography className={classes.titleInfoDetail} color="TextSecondary">
                                    {result.genre}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <table className={classes.row}>
                                <tbody>
                                    <tr className={classes.row}>
                                        <td>
                                            <Typography color="TextSecondary" className={classes.title}>
                                                Tipo de formato:
                                        </Typography>
                                        </td>
                                        <td className={classes.colInfo}>
                                            {
                                                result.format ? result.format.map(item =>
                                                    <Typography color="textSecondary" className={classes.info}>
                                                        {bull} {item}
                                                    </Typography>
                                                )
                                                    :
                                                    <Typography color="textSecondary" className={classes.info}>
                                                        No hay información
                                                    </Typography>
                                            }
                                        </td>
                                    </tr>
                                    <tr className={classes.row}>
                                        <td>
                                            <Typography color="TextSecondary" className={classes.title}>
                                                Estilo(s):
                                        </Typography>
                                        </td>
                                        <td className={classes.colInfo}>
                                            {
                                                result.style ? result.style.map(item =>
                                                    <Grid item container direction='row'>
                                                        <Typography color="textSecondary">
                                                            {bull}{item}
                                                        </Typography>
                                                    </Grid>
                                                )
                                                    :
                                                    <Typography color="textSecondary" className={classes.info}>
                                                        No hay información
                                                    </Typography>
                                            }
                                        </td>
                                    </tr>
                                    <tr className={classes.row}>
                                        <td >
                                            <Typography color="TextSecondary" className={classes.title}>
                                                Comunidad:
                                        </Typography>
                                        </td>
                                        <td className={classes.colInfo}>
                                            {
                                                result.community ?
                                                    <>
                                                        <Typography color="textSecondary">
                                                            lo quieren {result.community.want}
                                                        </Typography>
                                                        <Typography color="textSecondary">
                                                            lo tienen {result.community.have}
                                                        </Typography>
                                                    </>
                                                    :

                                                    <Typography color="textSecondary" className={classes.info}>
                                                        No hay información
                                                    </Typography>
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions className={classes.addBtn}>
                    <Button onClick={handleClose} color="primary" variant='contained' onClick={() => handleAddToCollection(result.id)}>
                        Añadir
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}
