import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import {
    AppBar,
    Container,
    Grid,
    Button,
    Hidden,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    appBar: {
        marginBottom: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
        textAlign: 'center',
    },
    noTransform: {
        textTransform: 'none!important' as any,
    },
}));


function Header() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <AppBar position="static" className={classes.appBar}>
            <Container maxWidth="md">
                <div className={classes.root}>
                    <Grid container alignItems='center' style={{height: 60}}>
                        <Grid item xs>
                            <Button color="inherit" className={classes.noTransform} target="_blank" href="https://sidepunch.co">SidePunch</Button>
                        </Grid>
                        <Grid item xs>
                            <span>
                                Hair On Image
                            </span>
                        </Grid>
                        <Grid item xs>
                            <Button color="inherit" className={classes.noTransform} onClick={handleClickOpen}>Example</Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">Example</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        <img src="/assets/haired_logo_512.png" alt="example" width="100%" />
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </AppBar>
    );
}
    
export default Header;
