import React, { Component } from 'react';
import flagLogo from '../../assets/flags/de.svg'

import {
    withStyles,
    IconButton,
    Flag,
    Fade,
    ClickAwayListener,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    ListItemIcon,
    ListItemText

} from '../../constants/material-ui'



class FlagList extends Component {

    state = {
        anchorEl: null,
        open: false,
    };

    handleClick = (event) => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,
        }));
    };

    handleClose = (event) => {
        if (this.state.anchorEl.contains(event.target)) {
            return;
        }
        this.setState(state => ({
            open: false,
        }));
    }


    render() {
        const { menuItem, icon, primary } = this.props.classes;
        const { anchorEl, open } = this.state;
        const id = open ? 'simple-popper' : null;

        return (
            <div>
                <IconButton height="75%" color="inherit"
                    aria-describedby={id} variant="contained" onClick={this.handleClick}>
                    <Flag />
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList>
                                        <MenuItem onClick={this.handleClose} className={menuItem}>
                                            <ListItemIcon className={icon}>
                                                <img alt="" src={flagLogo} width="20" />
                                            </ListItemIcon>
                                            <ListItemText className={primary}
                                                inset primary="India" />
                                        </MenuItem>
                                        <MenuItem onClick={this.handleClose} className={menuItem}>
                                            <ListItemIcon className={icon}>
                                                <img alt="" src={flagLogo} width="20" />
                                            </ListItemIcon>
                                            <ListItemText className={primary}
                                                inset primary="English" />
                                        </MenuItem>
                                        <MenuItem onClick={this.handleClose} className={menuItem}>
                                            <ListItemIcon className={icon}>
                                                <img alt="" src={flagLogo} width="20" />
                                            </ListItemIcon>
                                            <ListItemText className={primary}
                                                inset primary="German" />
                                        </MenuItem>
                                        <MenuItem onClick={this.handleClose} className={menuItem}>
                                            <ListItemIcon className={icon}>
                                                <img alt="" src={flagLogo} width="20" />
                                            </ListItemIcon>
                                            <ListItemText className={primary}
                                                inset primary="French" />
                                        </MenuItem>

                                    </MenuList>
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
    primary: {},
    icon: {}
});

export default withStyles(style)(FlagList)
