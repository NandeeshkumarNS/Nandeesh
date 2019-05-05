import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.css';

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <img src={logo} className={style.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
