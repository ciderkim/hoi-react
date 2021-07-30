import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Container,
    Grid,
    Typography,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: 'auto'
    },
    root: {
        flexGrow: 1,
        textAlign: 'center',
      },
    anchor: {
        color: 'inherit',
    },
  }));

function Footer() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="primary" className={classes.footer}>
            <Container maxWidth="md">
                <div className={classes.root}>
                    <Grid container alignItems='center' style={{height: 80}}>
                        <Grid item xs>
                            <Typography variant="body1" color="inherit">
                                © 2021 sidepun.ch
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <a href="https://github.com/kim-sardine/hoi-react" target='_blank' rel="noopener noreferrer" className={classes.anchor}><GitHubIcon /></a>  
                        </Grid>
                        <Grid item xs>
                            <a href="mailto:kim.sardine@gmail.com" className={classes.anchor}><EmailIcon /></a>  
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </AppBar>
    );
}
    
export default Footer;
