import React, { Component } from 'react';
import logo from './logo.svg';
import BootstrapScript from './components/BootstrapScripts.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BootstrapScript />
        <header className="App-header">
          <h1 className="App-title">Mohammed Saqib</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
