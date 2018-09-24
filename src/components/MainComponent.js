import React, {Component} from 'react'
import CarouselComponent from './CarouselComponent.js'

class MainComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <main role='main'>
          <CarouselComponent subComponents={this.props.subComponents}/> {this.props.subComponents.map((subComp) => (
            <div key={subComp.id}>{subComp.component}
            </div>
          ))}
        </main>
      </div>
    )
  }
}
export default MainComponent
