import React, {Component} from 'react'

class AcknowledgementComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='content text-center'>
        <div className='acknowledgments'>
          <p>Photos were taken from following sources:
          {this.props.links.map((link) => (" " + link))}
          </p>
        </div>
      </div>
    )
  }
}

export default AcknowledgementComponent
