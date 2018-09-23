import React, {Component} from 'react';
import logo from './logo.svg';
import MenuHeading from './components/MenuHeading.js'
import MainComponent from './components/MainComponent.js'

import './App.css';
import './styles/carousel.css';
import './styles/animation.css';
import './styles/index.css';

class App extends Component {
  render() {
    return (
          <div className='App'>

          <header className='App-header'>
            <MenuHeading/>
            <h1 className='App-title'>Mohammed Saqib</h1>
          </header>
          <MainComponent />
          </div>

    );
  }
}

export default App;
