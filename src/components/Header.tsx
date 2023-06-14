import React, {useState} from 'react';
import { makeStyles } from 'tss-react/mui';
import {
    AppBar,
    Grid,
} from '@mui/material';

const useStyles = makeStyles()((theme) => ({
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
    const { classes } = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <AppBar position="static" elevation={0} className={classes.appBar}>
                <div className={classes.root}>
                    <Grid container alignItems='center' style={{height: 60}}>
                        <Grid item xs>
                            <h3>
                                H.O.I - Hair On Image
                            </h3>
                        </Grid>
                    </Grid>
                </div>
        </AppBar>
    );
}
    
export default Header;
