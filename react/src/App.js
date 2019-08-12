import React, {Component} from 'react';
import logo from './logo.svg';
import MenuHeading from './components/MenuHeading.js'
import AboutComponent from './components/AboutComponent.js'
import PortfolioComponent from './components/PortfolioComponent.js'
import ContactComponent from './components/ContactComponent.js'
import AcknowledgementComponent from './components/AcknowledgementComponent.js'
import ExperiencesComponent from './components/ExperiencesComponent.js'
import ResumeComponent from './components/ResumeComponent.js'
import CarouselComponent from './components/CarouselComponent.js'
import './App.css';
import './styles/carousel.css';
import './styles/animation.css';
import './styles/index.css';

var DisplayResumeContext = React.createContext(false)

class App extends Component {
  constructor(props) {
    super(props)
    this.acknowledgments = ["https://proturbo.ro/contact/", "https://en.wikipedia.org/wiki/Coffee", "http://www.openculture.com/2015/03/the-story-of-lorem-ipsum.html", "http://www.comm.gatech.edu/brand/visual"]
    this.subComponents = [
      {
        id: 'header',
        title: 'Mohammed Saqib',
        hreflink: '#name'
      },
      {
        id: 'about',
        component: <AboutComponent/>,
        imgLink: 'img/coffee.jpg',
        hreflink: '#about',
        title: 'About Me',
        description: 'Personal details, goals & descriptions',
        button: 'Learn More'
      }, {
        id: 'experiences',
        component: <ExperiencesComponent />,
      imgLink: 'img/experiences.png',
        hreflink: '#experiences',
        title: 'Experiences',
        description: 'Companies, Responsibilities and Other Work Experiences',
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
        id: 'resume',
        component: <ResumeComponent/>,
      imgLink: 'img/resume.png',
        hreflink: '#resume',
        title: 'Resume',
        description: 'A formal resume',
        button: 'PDF Here!'
      }, {
        id: 'contact',
        component: <ContactComponent/>,
      imgLink: 'img/contact_us.png',
        hreflink: '#contact',
        title: 'Contact Me',
        description: 'More sites & contact info',
        button: 'Get In Touch!'
      }
    ]
    this.typingEffect = this.typingEffect.bind(this)
    this.isInViewport = this.isInViewport.bind(this)
    this.updateMenuNavbar = this.updateMenuNavbar.bind(this)
    this.state = {
      myDesc : "Developer, Engineer, Fixer",
      i: 0,
      activeState: 'about'
    }
    this.speed = 1000
  }


    typingEffect() {
      var fullDesc = "Developer, Engineer, Fixer"
      this.setState((state) => {
        if (state.i < fullDesc.length) {
          state.myDesc = fullDesc.substring(0,state.i)
        } else {
          state.myDesc = fullDesc
        }
        state.i = state.i + 1
        // if (state.i % 2 == 0) {
          state.myDesc = state.myDesc + " |"
        // } else {
        //   state.myDesc = state.myDesc + "  "
        // }
        setTimeout(this.typingEffect, this.speed)
        return state
      })
  }
  isInViewport(offset = 0, element) {
    if (!element) return false;
    const top = element.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }
  updateMenuNavbar(scrollEvent) {
    console.log(scrollEvent)
    if (this.isInViewport(scrollEvent.target)) {
      console.log()
    }
  }

  render() {
    // setTimeout(this.typingEffect, 50)
    this.headerStyle = {
      "padding-bottom": "160px"
    }
    return (
          <div className='App'>
          <DisplayResumeContext.Provider value={false}>
          <header className='App-header' style={this.headerStyle}>
            <MenuHeading subComponents={this.subComponents} activeState={this.state.activeState}/>
            <h1 className='App-title' id="name">Mohammed Saqib: {this.state.myDesc}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="24" viewBox="0 0 24 24"><path className='hack-arrow' d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
          </header>
          <CarouselComponent subComponents={this.subComponents}/>
          {this.subComponents.map((subComp) => (
            <div key={subComp.id} onScroll={this.updateMenuNavbar}>
              {subComp.component}
            </div>
          ))}
          <AcknowledgementComponent links={this.acknowledgments} />
          </DisplayResumeContext.Provider>
          </div>

    );
  }
}

export default App;
