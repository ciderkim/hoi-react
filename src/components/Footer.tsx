import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Container,
    Grid,
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
                    <Grid container alignItems='center' style={{height: 100}}>
                        <Grid item xs={12}>
                            <span>HOI - Hair On Image</span>
                        </Grid>
                        <Grid item xs>
                            <span>© 2021 sidepun.ch</span>
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
