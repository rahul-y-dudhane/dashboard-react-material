import React, { Component } from 'react';
import {
    withStyles,
    IconButton,
    Fade,
    AccountCircle,
    ClickAwayListener,
    Paper,
    Popper,
    Card,
    CardContent,
    Grid,
    SearchIcon,
    MailIcon,
    Favorite,
    Flag

} from '../../constants/material-ui'

import { CardActionArea } from '@material-ui/core';

const style = theme => ({
    favIcon: {
        color: 'red'
    },
    typography: {
        padding: theme.spacing.unit * 2,
    },
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    AppMenu: {
        width: 300
    },
    card: {
        minWidth: 275,
        display: 'flex',
        justifyContent: 'space-around'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
});

class MyProfile extends Component {

    state = {
        anchorEl: null,
        open: false,
    };

    handleClick = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,
        }));
    };

    handleClose = event => {
        if (this.state.anchorEl.contains(event.target)) {
            return;
        }
        this.setState(state => ({
            open: false,
        }));
    }


    render() {
        const { classes } = this.props;
        const { anchorEl, open } = this.state;
        const id = open ? 'simple-popper' : null;

        return (
            <div>
                <IconButton height="75%" color="inherit"
                    aria-describedby={id} variant="contained" onClick={this.handleClick}>
                    <AccountCircle />
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl}
                    transition className={classes.AppMenu}>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Grid container>
                                                <Grid item sm={4} justify='center'>
                                                    Hello
                                                </Grid>
                                                <Grid item sm={8}>
                                                    World
                                                </Grid>

                                            </Grid>

                                        </CardContent>
                                    </Card>

                                </ClickAwayListener>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </div>
        )
    }
}
export default withStyles(style)(MyProfile)  
