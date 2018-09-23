import React, {Component} from 'react';
import logo from './logo.svg';
import MenuHeading from './components/MenuHeading.js'
import MainComponent from './components/MainComponent.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body data-spy="scroll" data-target="menu">
          <header className="App-header">
            <MenuHeading/>
            <h1 className="App-title">Mohammed Saqib</h1>
          </header>
          <MainComponent />
        </body>
      </div>
    );
  }
}

export default App;
