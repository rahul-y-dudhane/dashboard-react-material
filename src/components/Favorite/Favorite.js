import React from 'react';

import {
    withStyles,
     IconButton,
    Favorite

} from '../../constants/material-ui'

const style = theme => ({
    favIcon:{
        color:'red',
    }
});

function FavoriteIcon(props) {
    const { classes } = props;

    function onFavClick() {
        
    }
    
       return (
        <div className={classes.favIcon}>
            <IconButton height="75%" color="inherit"
                aria-label="Expand more"
                onClick={onFavClick}>
                <Favorite />
            </IconButton>
        </div>
    )
}
export default withStyles(style)(FavoriteIcon)
