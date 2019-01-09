import React from 'react';

import {
    withStyles,
    InputBase,
    SearchIcon,
    fade
} from '../../constants/material-ui'

import ExpandUpMenu from '../ExpandUpMenu/ExpandUpMenu';

const style = theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
            height: '75%',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    grow: {
        flexGrow: 1,
    },
    icon: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '80%',
        alignItems: 'center'
    }
});

function SearchBar(props) {
    const { classes } = props;
    return (
        <div className={classes.icon}>
            <div className={classes.grow} />
            <ExpandUpMenu />
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />
            </div>
        </div>
    )
}
export default withStyles(style)(SearchBar)
