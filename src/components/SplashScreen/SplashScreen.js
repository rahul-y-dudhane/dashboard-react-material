import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './SplashScreen.scss';

export default class SplashScreen extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}
