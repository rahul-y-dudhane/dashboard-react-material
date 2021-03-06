import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/logo.svg';
import './Sidebar.scss';
import SearchBar from '../SearchBar/SearchBar';
import ExpandUpMenu from '../ExpandUpMenu/ExpandUpMenu';
import FavoriteIcon from '../Favorite/Favorite';
import AppList from "../AppList/AppList"

import {
  Drawer,
  withStyles,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  InboxIcon,
  MailIcon,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuIcon,
  CssBaseline,
  Grid,
  Fullscreen,
  Notifications,
  Hidden

} from '../../constants/material-ui'
import FlagList from '../FlagList/FlagList';
import MyProfile from '../MyProfile/MyProfile';

const drawerWidth = 240;


const Sidebar = (props) => {
  const menuList = ['Inbox', 'Starred', 'Send email', 'Drafts'];
  const { classes } = props;
  const [open, setOpen] = React.useState(true);
  const [fullScreenFlag, setFlag] = React.useState(false);

  function handleDrawerOpen() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  const toggleFullScreen = () => {
    if (fullScreenFlag) {
      closeFullscreen();
      setFlag(false);
    } else {
      openFullscreen();
      setFlag(true);
    }

  }
  const openFullscreen = () => {
    const elem = document.documentElement;
    const { requestFullscreen, mozRequestFullScreen, webkitRequestFullscreen, msRequestFullscreen } = elem;
    if (requestFullscreen) {
      elem.requestFullscreen();
    } else if (mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  const closeFullscreen = () => {
    const { exitFullscreen, mozCancelFullScreen, webkitExitFullscreen, msExitFullscreen } = document;
    if (exitFullscreen) {
      document.exitFullscreen();
    } else if (mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  const fullList = () => {
    return (
      <List>
        {menuList.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    )
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={16} direction='row' alignItems='center'>

            <Grid container xs={2} sm={2} direction='row' justify='space-around' alignItems='center'>
              <Grid item xs={12} sm={4} >
                <img src={logo} className="App-logo1" alt="logo" />
              </Grid>
              <Hidden only="xs">

                <Grid item xs={1} sm={8} >
                  <Typography variant="h6" color="inherit" noWrap>
                    Dashboard
              </Typography>
                </Grid>
              </Hidden>
            </Grid>

            <Grid container xs={4} sm={6} alignItems='center' direction='row'>
              <Grid item >
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawerOpen}
                  className={classes.menuButton}>
                  <MenuIcon />
                </IconButton>
              </Grid>

              <Hidden only="xs">
                <Grid item>
                  <ExpandUpMenu />
                </Grid>
              </Hidden>

              <Hidden only="xs">
                <Grid item>
                  <FavoriteIcon />
                </Grid>
              </Hidden>
            </Grid>

            <Grid container xs={6} sm={4} alignItems='center' justify='flex-end' direction='row'>
              <Grid item>
                <SearchBar />
              </Grid>

              <Hidden only="xs">
                <Grid item>
                  <FlagList />
                </Grid>
              </Hidden>

              <Grid item>
                <IconButton height="75%" color="inherit"
                  onClick={toggleFullScreen}>
                  <Fullscreen />
                </IconButton>
              </Grid>

              <Hidden only="xs">
                <Grid item>
                  <AppList />
                </Grid>
              </Hidden>

              <Hidden only="xs">
                <Grid item>
                  <IconButton height="75%" color="inherit">
                    <Notifications />
                  </IconButton>
                </Grid>
              </Hidden>

              <Grid item>
                <MyProfile />
              </Grid>
            </Grid>
          </Grid>


        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        className={(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: classes.drawerPaper,

        }}
        open={open}
      >
        <div className={classes.toolbar} />
        {fullList()}
        <Divider />
        {fullList()}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
            </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
      </main>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    display: 'flex',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,
    [theme.breakpoints.up('sm')]: {
      width: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});


export default withStyles(styles)(Sidebar);
