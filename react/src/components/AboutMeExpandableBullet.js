import React, {Component} from 'react'

class AboutMeExpandableBullet extends Component {
  constructor(props) {
    super(props)
    this.bulletTitle = props.bulletTitle
    this.bulletDetails = props.bulletDetails
    this.state = {
      showDetails: false
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState((state) => ({showDetails: !state.showDetails}))
  }

  render() {
    return <li onClick={this.onClick}>{this.bulletTitle}
    { this.state.showDetails ?
    <ul>
    {this.bulletDetails.map((detail) => <li>{detail}</li>)}
    </ul> : <div></div>
    }
    </li>
  }
}

export default AboutMeExpandableBullet
