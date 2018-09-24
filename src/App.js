import React, {Component} from 'react';
import logo from './logo.svg';
import MenuHeading from './components/MenuHeading.js'
import MainComponent from './components/MainComponent.js'
import AboutComponent from './components/AboutComponent.js'
import PortfolioComponent from './components/PortfolioComponent.js'
import ContactComponent from './components/ContactComponent.js'
import AcknowledgementComponent from './components/AcknowledgementComponent.js'
import './App.css';
import './styles/carousel.css';
import './styles/animation.css';
import './styles/index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.acknowledgments = ["https://proturbo.ro/contact/", "https://en.wikipedia.org/wiki/Coffee"]
    this.subComponents = [
      {
        id: 'about',
        component: <AboutComponent/>,
      imgLink: 'img/coffee.jpg',
        hreflink: '#about',
        title: 'About Me',
        description: 'Personal details, goals & descriptions',
        button: 'Learn More'
      }, {
        id: 'portfolio',
        component: <PortfolioComponent/>,
        imgLink: 'img/technology.jpg',
        hreflink: '#portfolio',
        title: 'Projects',
        description: 'Informative studies, interesting POCs & exciting implementations',
        button: 'Learn More'
      }, {
        id: 'contact',
        component: <ContactComponent/>,
      imgLink: 'img/contact_us.png',
        hreflink: '#contact',
        title: 'Contact Me',
        description: 'More sites & contact info',
        button: 'Learn More'
      }
    ]
  }
  render() {
    return (
          <div className='App'>

          <header className='App-header'>
            <MenuHeading subComponents={this.subComponents}/>
            <h1 className='App-title'>Mohammed Saqib: Developer, Engineer, Fixer</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="24" viewBox="0 0 24 24"><path className='hack-arrow' d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
          </header>
          <MainComponent subComponents={this.subComponents}/>
          <AcknowledgementComponent links={this.acknowledgments} />
          </div>

    );
  }
}

export default App;
