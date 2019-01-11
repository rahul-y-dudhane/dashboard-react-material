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

/**
 * @description Component which renders search bar icon with actions on top
 * @param {*} param0 
 */
const SearchBar = ({ classes }) => {
    const { icon, grow, iconWidth, searchBar, margin } = classes;
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        open ? setOpen(false) : setOpen(true);
    }

    return (
        <div className={icon}>
            <div className={grow} />
            <IconButton height="75%" color="inherit"
                aria-label="Expand more"
                onClick={handleDrawerOpen}>
                <SearchIcon />
            </IconButton>

            <Drawer anchor="top" variant="persistent" open={open}>
                <div className={margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item className={iconWidth} justify="flex-end">
                            <SearchIcon />
                        </Grid>
                        <Grid item className={searchBar}>
                            <TextField id="input-with-icon-grid" label="Search"
                                fullWidth={true} autoFocus={true} />
                        </Grid>
                        <Grid item className={iconWidth}>
                            <Cancel onClick={handleDrawerOpen} />
                        </Grid>
                    </Grid>
                </div>
            </Drawer>
        </div>
    )
}

/**
 * @description Styles applied on search bar component
 */
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
export default withStyles(style)(SearchBar)
