import React, {Component} from 'react'
import PortfolioItemComponent from './PortfolioItemComponent.js'
class PortfolioComponent extends Component {
  constructor(props) {
    super(props)
    this.dataItems = [
      {}
    ]
  }
  render() {
    var portfolioItemList = this.dataItems.map((item, ind) => <PortfolioItemComponent key={ind} data={item}/>)

    return (
      <div id='portfolio'>
        <h1>This is an amazing website. Because it was my first website.</h1>
        <div className='row portfolio'>
          {portfolioItemList}
        </div>
        <br/>
        <br/>
      </div>
    )

  }
}

export default PortfolioComponent
