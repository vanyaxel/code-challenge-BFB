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
export default function AlertDialog() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                        Nirvana
                    </Typography>
                    <Typography variant="body1" color="secondary">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, consectetur. Tenetur nostrum sapiente placeat, officia quisquam accusantium laudantium harum eius, non fuga aut praesentium quis! Repellat maiores possimus harum praesentium!
                    </Typography>
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
