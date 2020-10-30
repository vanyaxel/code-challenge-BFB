import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dialog: {
        minWidth: '290px',
    }
});

export default function Detail({ result }) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log(result);

    return (
        <div>
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
                <DialogActions>
                    <Button onClick={handleClose} color='secondary'>
                        X
                    </Button>
                </DialogActions>
                <DialogContent>
                    <Typography variant="h5" color="secondary">
                        {result.title}
                    </Typography>
                    <img src={result.thumb} alt={result.cover_image} />
                    <Typography variant="body1" color="secondary">
                        <strong>País: </strong> {result.country}
                    </Typography>
                    <Typography variant="body1" color="secondary">
                        <strong>País: </strong> {result.genre}
                    </Typography>
                    <Typography variant="body1" color="secondary">
                        <strong>Tipo de formato:</strong>
                    </Typography>
                    <Typography variant="body1" color="secondary">
                        <strong>Label: </strong> {result.label}
                    </Typography>
                    <Typography variant="body1" color="secondary">
                        <strong>Tipo: </strong> {result.type}
                    </Typography>
                    <Typography variant="body1" color="secondary">
                        <strong>Estilo: </strong> {result.style}
                    </Typography>
                    {
                        result.format ? result.format.map(item =>
                            <Typography variant="body2" color="secondary">
                                - {item}
                            </Typography>

                        )
                            :
                            <div>no hay fromato</div>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant='contained'>
                        Añadir
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
