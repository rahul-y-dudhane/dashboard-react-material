import React from 'react';

import {
    Drawer,
    withStyles,
    SearchIcon,
    IconButton,
    TextField,
    Grid,
    Cancel
} from '../../constants/material-ui'


const style = theme => ({
    grow: {
        flexGrow: 1,
    },
    icon: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '80%',
        alignItems: 'center'
    },
    margin: {
        margin: theme.spacing.unit,
        color: '#000000',
    },
    searchBar: {
        width: '80%'
    },
    iconWidth: {
        width: '10%',
        display: 'flex'
    }
});

function SearchBar(props) {
    const { classes } = props;
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    return (
        <div className={classes.icon}>
            <div className={classes.grow} />
            <IconButton height="75%" color="inherit"
                aria-label="Expand more"
                onClick={handleDrawerOpen}>
                <SearchIcon />
            </IconButton>

            <Drawer anchor="top" variant="persistent" open={open}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item className={classes.iconWidth} justify="flex-end">
                            <SearchIcon />
                        </Grid>
                        <Grid item className={classes.searchBar}>
                            <TextField id="input-with-icon-grid" label="Search" 
                            fullWidth={true} autoFocus={true} />
                        </Grid>
                        <Grid item className={classes.iconWidth}>
                            <Cancel onClick={handleDrawerOpen} />
                        </Grid>
                    </Grid>
                </div>
            </Drawer>
        </div>
    )
}
export default withStyles(style)(SearchBar)
