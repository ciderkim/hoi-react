import React from 'react';
import {
    AppBar,
    Container,
    Grid,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <AppBar position="static" color="primary" className="footer" elevation={0}>
            <Container maxWidth="md">
                <div className="root">
                    <Grid container alignItems='center' style={{height: 60}}>
                        <Grid item xs> 
                        </Grid>
                        <Grid item xs>
                            <a href="https://sidepunch.co/" className="anchor" target='_blank'>SidePunch</a>  
                        </Grid>
                        <Grid item xs>
                            <a href="https://github.com/kim-sardine/hoi-react" target='_blank' rel="noopener noreferrer" className="anchor"><GitHubIcon /></a>  
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </AppBar>
    );
}
    
export default Footer;
