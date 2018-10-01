import React, {Component} from 'react'

class PortfolioItemComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id={this.props.data.idName} className='col portfolio container-item port-item'>
        <div className="flip-container front">
        <a href={this.props.data.url}>
          <h2>{this.props.data.name}</h2>
        </a>
        <p>{this.props.data.description}</p>
        <a href={this.props.data.imgHref ? this.props.data.imgHref : this.props.data.url}><img src={this.props.data.imgLink} className='text-center mx-auto portfolio-image'/></a>
        </div>
    </div>
    )

  }
}

export default PortfolioItemComponent
