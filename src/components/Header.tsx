import React from 'react';
import {
    AppBar,
    Grid,
} from '@mui/material';

function Header() {
    return (
        <AppBar position="static" elevation={0} className="appBar">
                <div className="root">
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
