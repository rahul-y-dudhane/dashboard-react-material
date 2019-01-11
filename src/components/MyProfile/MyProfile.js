import React, { Component } from 'react';

import profilePic from '../../assets/myProfile.jpg'

import {
    withStyles,
    IconButton,
    Fade,
    AccountCircle,
    ClickAwayListener,
    Paper,
    Popper,
    Card,
    Grid,
    Avatar,
    MenuItem,
    MenuList,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    Person,
    Settings,
    Lock,
    Help,
    PowerSettingsNew,
} from '../../constants/material-ui'

/**
 * @description Comonent for displaying profile details
 */
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
        const {AppMenu, card, bigAvatar,menuItem, icon, primary} = this.props.classes;
        const { anchorEl, open } = this.state;
        const id = open ? 'simple-popper' : null;

        return (
            <div>
                <IconButton height="75%" color="inherit"
                    aria-describedby={id} variant="contained" onClick={this.handleClick}>
                    <AccountCircle />
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl}
                    transition className={AppMenu}>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <Card className={card}>
                                            <Grid container spacing={8} justify='space-around' alignContent='center'>

                                                <Grid container justify='center' sm={4}>
                                                    <Grid item>
                                                    <Avatar alt="Rahul Profile" src={profilePic} 
                                                 className={bigAvatar} />
                                                    </Grid>
                                                
                                                </Grid>

                                                <Grid container direction='column' sm={8} justify='center'>
                                                <Grid item>
                                                <Typography align="center" variant="subtitle1">
                                               Rahul Dudhane
                                                </Typography>

                                                </Grid>
                                                <Grid item>
                                                <Typography align="center" variant="caption">
                                               Web Developer
                                                </Typography>

                                                </Grid>
                                                <Grid item>
                                                <Typography align="center" variant="caption">
                                                    Member Since August 2017
                                                    </Typography>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                    <Card>
                                    <MenuList>
                                        <MenuItem onClick={this.handleClose} className={menuItem}>
                                            <ListItemIcon className={icon}>
                                                <Person />
                                            </ListItemIcon>
                                            <ListItemText className={primary}
                                                inset primary="Profile" />
                                        </MenuItem>
                                        <MenuItem onClick={this.handleClose} className={menuItem}>
                                            <ListItemIcon className={icon}>
                                                <Settings />
                                            </ListItemIcon>
                                            <ListItemText className={primary}
                                                inset primary="Settings" />
                                        </MenuItem>
                                        <MenuItem onClick={this.handleClose} className={menuItem}>
                                            <ListItemIcon className={icon}>
                                                <Lock />
                                            </ListItemIcon>
                                            <ListItemText className={primary}
                                                inset primary="Lock Screen" />
                                        </MenuItem>
                                        <MenuItem onClick={this.handleClose} className={menuItem}>
                                            <ListItemIcon className={icon}>
                                                <Help />
                                            </ListItemIcon>
                                            <ListItemText className={primary}
                                                inset primary="Help" />
                                        </MenuItem>
                                        <Divider light={true}/>
                                        <MenuItem onClick={this.handleClose} className={menuItem}>
                                            <ListItemIcon className={icon}>
                                               <PowerSettingsNew />
                                            </ListItemIcon>
                                            <ListItemText className={primary}
                                                inset primary="Logout" />
                                        </MenuItem>

                                    </MenuList>
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

/**
 * @description Styles used for view my profile section
 * @param {*} theme 
 */
const style = theme => ({
       typography: {
        padding: theme.spacing.unit * 2,
    },
    AppMenu: {
        width: 250
    },
    card: {
        display: 'flex',
        alignContent: 'center'
            },
    
    bigAvatar: {
        margin: 20,
        width: 70,
        height: 70,
      },
      menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {}
});
export default withStyles(style)(MyProfile)  
