import React, {Component} from 'react'
import AboutComponent from './AboutComponent.js'
import CarouselComponent from './CarouselComponent.js'
import PortfolioComponent from './PortfolioComponent.js'
import ContactComponent from './ContactComponent.js'
class MainComponent extends Component {
  constructor(props) {
    super(props)
    this.subComponents = [
      {
        id: 'about',
        component: <AboutComponent/>,
        img: '',
        hreflink: '#about',
        title: 'About Me',
        description: 'Personal details, goals & descriptions',
        button: 'Learn More'
      }, {
        id: 'portfolio',
        component: <PortfolioComponent/>,
        img: '',
        hreflink: '#portfolio',
        title: 'Projects',
        description: 'Informative studies, interesting POCs & exciting implementations',
        button: 'Learn More'
      }, {
        id: 'contact',
        component: <ContactComponent/>,
        img: '',
        hreflink: '#contact',
        title: 'Contact Me',
        description: 'More sites & contact info',
        button: 'Learn More'
      }
    ]
  }
  render() {
    return (
      <div>
        <main role='main'>
          <CarouselComponent subComponents={this.subComponents}/> {this.subComponents.map((subComp) => (
            <div key={subComp.id}>{subComp.component}</div>
          ))}
        </main>
      </div>
    )
  }
}
export default MainComponent
