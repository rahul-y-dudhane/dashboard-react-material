import React from 'react';
import ReactDOM from 'react-dom';
import './scss/__app.scss';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Sidebar from './components/Sidebar/Sidebar';

ReactDOM.render(<SplashScreen />, document.getElementById('root'));

setTimeout(() => {
    ReactDOM.render(<Sidebar />, document.getElementById('root'));
}, 1500);
