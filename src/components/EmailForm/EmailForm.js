import React, { Component } from 'react';

import './EmailForm.scss'

import {
    TextField,
    Button,
    withStyles,
    Send,
    Tooltip
} from '../../constants/material-ui';

 class EmailForm extends Component {

    render() {
        const {button } = this.props.classes;
        return (
            <form class='email-form' noValidate autoComplete="off">
                <TextField
                    id="email"
                    label="Email*"
                />
                <TextField
                    id="subject"
                    label="Subject*"
                />
                <TextField
                    id="message"
                    label="Message*"
                />
                <Tooltip title="Send" aria-label="Send">
                <Button className={button} variant="contained" color="primary" >
                    <Send /> &nbsp;
                    Send
               {/* <Icon className={classes.rightIcon}>send</Icon> */}
                </Button>
                </Tooltip>
            </form>
        )
    }
}
const style = (theme) => ({
    button: {
        margin: theme.spacing.unit,
      },
});

export default withStyles(style)(EmailForm);