import React, { Component } from 'react';
import './AppList.scss'
import {
    withStyles,
    IconButton,
    Fade,
    Apps,
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

class AppList extends Component {

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
        const { AppMenu, card } = this.props.classes;
        const { anchorEl, open } = this.state;
        const id = open ? 'simple-popper' : null;

        return (
            <div>
                <IconButton height="75%" color="inherit"
                    aria-describedby={id} variant="contained" onClick={this.handleClick}>
                    <Apps />
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl}
                    transition className={AppMenu}>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <Card className={card}>
                                        <Grid container spacing={8} >
                                            <Grid item sm={4}>
                                                <Card >
                                                    <CardActionArea>
                                                        <CardContent className='app-item1'>
                                                            <Grid container direction='column' alignItems='center'>
                                                                <Grid item>
                                                                    <SearchIcon />

                                                                </Grid>
                                                                <Grid item>
                                                                    Search

                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>

                                            <Grid item sm={4}>
                                                <Card >
                                                    <CardActionArea>
                                                        <CardContent className='app-item2'>
                                                            <Grid container direction='column' alignItems='center'>
                                                                <Grid item>
                                                                    <Favorite />

                                                                </Grid>
                                                                <Grid item>
                                                                    Favorite

                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>

                                            <Grid item sm={4}>
                                                <Card >
                                                    <CardActionArea>
                                                        <CardContent className='app-item3'>
                                                            <Grid container direction='column' alignItems='center'>
                                                                <Grid item>
                                                                    <MailIcon />

                                                                </Grid>
                                                                <Grid item>
                                                                    Mail

                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                            <Grid item sm={4}>
                                                <Card >
                                                    <CardActionArea>
                                                        <CardContent className='app-item4'>
                                                            <Grid container direction='column' alignItems='center'>
                                                                <Grid item>
                                                                    <SearchIcon />

                                                                </Grid>
                                                                <Grid item>
                                                                    Search

                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                            <Grid item sm={4}>
                                                <Card >
                                                    <CardActionArea>
                                                        <CardContent className='app-item5'>
                                                            <Grid container direction='column' alignItems='center'>
                                                                <Grid item>
                                                                    <Flag />

                                                                </Grid>
                                                                <Grid item>
                                                                    Flag

                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                            <Grid item sm={4}>
                                                <Card >
                                                    <CardActionArea>
                                                        <CardContent className='app-item6'>
                                                            <Grid container direction='column' alignItems='center'>
                                                                <Grid item>
                                                                    <SearchIcon />

                                                                </Grid>
                                                                <Grid item>
                                                                    Search

                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                            <Grid item sm={4}>
                                                <Card >
                                                    <CardActionArea>
                                                        <CardContent className='app-item7'>
                                                            <Grid container direction='column' alignItems='center'>
                                                                <Grid item>
                                                                    <MailIcon />

                                                                </Grid>
                                                                <Grid item>
                                                                    Mail

                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                            <Grid item sm={4}>
                                                <Card >
                                                    <CardActionArea>
                                                        <CardContent className='app-item8'>
                                                            <Grid container direction='column' alignItems='center'>
                                                                <Grid item>
                                                                    <Flag />

                                                                </Grid>
                                                                <Grid item>
                                                                    Flag

                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                            <Grid item sm={4}>
                                                <Card >
                                                    <CardActionArea>
                                                        <CardContent className='app-item9'>
                                                            <Grid container direction='column' alignItems='center'>
                                                                <Grid item>
                                                                    <SearchIcon />

                                                                </Grid>
                                                                <Grid item>
                                                                    Search

                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                        </Grid>

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


export default withStyles(style)(AppList)
