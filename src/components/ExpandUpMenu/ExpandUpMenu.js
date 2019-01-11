import React from 'react';

import profilePic from '../../assets/myProfile.jpg'
import EmailForm from '../EmailForm/EmailForm';
import fblogo from '../../assets/fbicon.svg';
import twitterLogo from '../../assets/twittericon.svg';
import gPlusLogo from '../../assets/gplusicon.svg';

import {
    withStyles,
    ExpandMore,
    Fab,
    Drawer,
    Grid,
    Avatar,
    IconButton,
    Typography,
    ClickAwayListener,
    Tooltip,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Close

} from '../../constants/material-ui'

/**
 * @description It render's Top position drawer
 * @param {*} param0 
 */
const ExpandUpMenu = ({ classes }) => {
    const { bigAvatar, drawer,fab } = classes;
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        open ? setOpen(false) : setOpen(true);
    }

    const awayClickHandle = () => {
        setOpen(false);
    }

    return (
        <div>
            <IconButton height="75%" color="inherit"
                aria-label="Expand more"
                onClick={handleDrawerOpen}>
                <ExpandMore />
            </IconButton>
            <ClickAwayListener onClickAway={awayClickHandle}>
                <Drawer anchor="top" variant="persistent" open={open}>

                    <Grid container className={`up-menu-background ${drawer}`} justify='space-between' alignItems='center' >

                        <Grid item sm={4}>
                            <Grid container justify='center' alignItems='center' >
                                <Grid item sm={6}>

                                    <Grid container justify='flex-end' alignContent='center'>
                                        <Grid item>
                                            <Avatar alt="Rahul Profile" src={profilePic}
                                                className={bigAvatar} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sm={6}>
                                    <Grid container direction='column' justify='space-around'>
                                        <Grid item>
                                            <Typography align="center" variant="h6">
                                                Rahul Dudhane
                                                </Typography>
                                        </Grid>
                                        <Grid item >
                                            <Typography align="center" variant="subtitle1" height='200'>
                                                <span className='seconday-text-color'>
                                                    Web Developer
                                               </span>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="center" variant="caption">
                                                Member Since August 2017
                                                    </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container justify='space-evenly'>
                                                <Tooltip title="Facebook" aria-label="Facebook">
                                                    <img alt='Facebook' src={fblogo} />
                                                </Tooltip>
                                                <Tooltip title="Twitter" aria-label="Twitter">
                                                    <img alt='Twitter' src={twitterLogo} />
                                                </Tooltip>
                                                <Tooltip title="Google" aria-label="Google">
                                                    <img alt='Google Plus' src={gPlusLogo} />
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item sm={4}>

                            <Grid container justify='space-around' alignItems='center'>
                                <Grid item>
                                    <EmailForm />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sm={4}>
                        <Grid container justify='flex-end' alignItems='center'>
                            <Fab onClick={handleDrawerOpen} color="secondary" aria-label="Edit" className={`fab ${fab}`}>
                            <Close />
                            </Fab>
                        </Grid>
                            <Grid container justify='center' alignItems='center'>

                                <FormGroup direction='column' justify='center' >

                                    <FormControlLabel
                                        control={
                                            <Checkbox />
                                        }
                                        label="Notifications"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox />
                                        }
                                        label="Task"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox />
                                        }
                                        label="Event"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox />
                                        }
                                        label="Downloads"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox />
                                        }
                                        label="Messages"
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Drawer>
            </ClickAwayListener>

        </div>
    )
}
const style = (theme) => ({
    card: {
        display: 'flex',
        alignContent: 'center',
    },

    bigAvatar: {

        width: 120,
        height: 120,
    },
    drawer: {
        height: 'max-content',

    },
    fab:{
        width:40,
        height: 30
    }
});
export default withStyles(style)(ExpandUpMenu)
