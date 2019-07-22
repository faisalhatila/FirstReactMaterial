import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Box} from '@material-ui/core';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

export default props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" gutterBottom color="initial">
                    Exercise DataBase
                </Typography>
            </Toolbar>
        </AppBar>
    )
}