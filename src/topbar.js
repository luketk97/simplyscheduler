import React from 'react'
import {Appbar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import {Menu} from '@material-ui/icons'

function topbar(){
    return (
        <div>
            <Appbar position='static'>
                <Toolbar>
                    <Typography>
                    SimplyScheduler
                    </Typography>
                    <IconButton>
                    <Menu/>
                    </IconButton>
                    <Button>Login</Button>
                </Toolbar>
            </Appbar>
        </div>
    );
}

export default topbar;