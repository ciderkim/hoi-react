import React from 'react';
import { makeStyles } from '@mui/styles';
import {
    AppBar,
    Container,
    Grid,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

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
                    <Grid container alignItems='center' style={{height: 60}}>
                        <Grid item xs>
                            <span>© 2022 sidepun.ch</span>
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
