import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {
    AppBar,
    Container,
    Grid,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles()((theme) => ({
    footer: {
        marginTop: 'auto'
    },
    root: {
        flexGrow: 1,
        textAlign: 'center',
      },
    anchor: {
        color: 'inherit',
        textDecoration: 'none',
    },
  }));

function Footer() {
    const { classes } = useStyles ();

    return (
        <AppBar position="static" color="primary" className={classes.footer} elevation={0}>
            <Container maxWidth="md">
                <div className={classes.root}>
                    <Grid container alignItems='center' style={{height: 60}}>
                        <Grid item xs> 
                        </Grid>
                        <Grid item xs>
                            <a href="https://sidepunch.co/" className={classes.anchor} target='_blank'>SidePunch</a>  
                        </Grid>
                        <Grid item xs>
                            <a href="https://github.com/kim-sardine/hoi-react" target='_blank' rel="noopener noreferrer" className={classes.anchor}><GitHubIcon /></a>  
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </AppBar>
    );
}
    
export default Footer;
