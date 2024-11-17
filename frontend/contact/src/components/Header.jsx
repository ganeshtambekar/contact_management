import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Header = () => {
    return (
        <AppBar position="static" id="app-bar">
            <Toolbar sx={{ backgroundColor: '#007BFF' }}>
                <IconButton edge="start" color="inherit" id="account-icon">
                    <AccountCircle />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }} id="app-title">
                    Contact Management App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
