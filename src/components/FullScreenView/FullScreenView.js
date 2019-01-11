import React from 'react';

import {
    Fullscreen,
    IconButton,
    FullscreenExit
} from '../../constants/material-ui';

/**
 * @description Shows full screen icon with its actions
 */
const FullScreenView = () => {

    /**
     * @description Used to manage state for fullscreen view
     */
    const [fullScreenFlag, setFlag] = React.useState(false);

    /**
     * @description Set full screen flag as per change
     */
    const toggleFullScreen = () => {
        if (fullScreenFlag) {
            closeFullscreen();
            setFlag(false);
        } else {
            openFullscreen();
            setFlag(true);
        }
    }

    /**
     * @description Open fullscreen
     */
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

    /**
     * @description Close fullscreen
     */
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
    return (
        <IconButton height="75%" color="inherit"
            onClick={toggleFullScreen}>
            {fullScreenFlag ? <FullscreenExit />: <Fullscreen /> }
        </IconButton>
    );
}
export default FullScreenView;