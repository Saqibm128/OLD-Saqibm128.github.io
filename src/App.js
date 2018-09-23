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
            <h1 className='App-title'>Mohammed Saqib: Developer, Engineer, Fixer</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="24" viewBox="0 0 24 24"><path className='hack-arrow' d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
          </header>
          <MainComponent />
          </div>

    );
  }
}

export default App;
