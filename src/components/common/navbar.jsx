import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component {
    render() {
        return (
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        QAB
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar;