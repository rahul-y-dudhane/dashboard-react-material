import React from 'react';

import {
    withStyles,
    ExpandMore,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    InboxIcon,
    MailIcon,
    IconButton,

} from '../../constants/material-ui'

const style = theme => ({
});



const ExpandUpMenu = (props) => {
    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const menuList = ['Inbox', 'Starred', 'Send email', 'Drafts'];

    function handleDrawerOpen() {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    const fullList = () => {
        return(
        <div className={classes.fullList}>
            <List>
                { menuList.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

        </div>
        )
    };

    return (
        <div>
            <IconButton height="75%" color="inherit"
                aria-label="Expand more"
                onClick={handleDrawerOpen}>
                <ExpandMore />
            </IconButton>
            <Drawer anchor="top" variant="persistent" open={open}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={handleDrawerOpen}
                >
                    {fullList()}    
                </div>
            </Drawer>
        </div>
    )
}
export default withStyles(style)(ExpandUpMenu)
