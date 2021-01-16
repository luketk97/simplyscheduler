import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import {Menu} from '@material-ui/icons'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
    },
    menuButton:{
        color: 'green',
    },
    title:{
        fontFamily: 'Garamond',
        fontSize: '25px',
        color: 'green',
    },
    loginButton:{
        color: 'green'
    }

}));
export default function Topbar(){
    const [open, setOpen] = React.useState(false);
    const openLogin = () => {
        setOpen(true);
    }
    const cancelLogin = () => {
        setOpen(false);
    }
    const attemptLogin = () => {
        setOpen(false);
    }
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <IconButton className={classes.menuButton}>
                        <Menu/>
                    </IconButton>
                    <Typography className = {classes.title} style ={{flexGrow : 1}} >
                        SimplyScheduler
                    </Typography>
                    <Button onClick={openLogin} className = {classes.loginButton}>Login</Button>
                </Toolbar>
            </AppBar>
            <Dialog open={open} onClose={cancelLogin, attemptLogin} aria-labelledby="form-dialog-title">
                <DialogTitle sid="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelLogin} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={attemptLogin} color="primary">
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};