import React, {Component} from 'react'
import AboutComponent from './AboutComponent.js'
import CarouselComponent from './CarouselComponent.js'
import PortfolioComponent from './PortfolioComponent.js'


class MainComponent extends Component {
  render() {
    return (
      <div>
        <main role="main">
          <div id="mainCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#mainCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#mainCarousel" data-slide-to="1"></li>
              <li data-target="#mainCarousel" data-slide-to="2"></li>
            </ol>
            <AboutComponent/>
            <PortfolioComponent />
          </div>
        </main>
        </div>
        )
      }
    }

export default MainComponent
