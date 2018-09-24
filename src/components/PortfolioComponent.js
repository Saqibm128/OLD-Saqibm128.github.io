import React, {Component} from 'react'
import PortfolioItemComponent from './PortfolioItemComponent.js'
class PortfolioComponent extends Component {
  constructor(props) {
    super(props)
    this.dataItems = [
      {
        idName: 'candyProject',
        url: 'http://ec2-18-217-140-91.us-east-2.compute.amazonaws.com:8000/',
        imgLink: 'img/candyProject.png',
        name: 'Candy Visualization',
        description: 'A multigraph data visualization of survey data of favorite candies.',
      }, {
        idName: 'BHIProject',
        url: 'https://github.com/Saqibm128/BHIProject',
        imgLink: 'img/ebola.png',
        name: 'Ebola Model Simulation',
        description: 'A GUI for modeling the 2014 Ebola epidemic'
      }, {
        idName: 'ultimateTicTacToe',
        url: 'https://github.com/Saqibm128/UltimateTicTacToe',
        imgLink: 'img/ultimateTicTacToe.png',
        name: 'Ultimate Tic Tac Toe',
        description: 'A JavaFX program for playing a 3x3x3 game of Tic Tac Toe'
      }
    ]
    this.state = {dataItems: this.dataItems}
  }
  render() {
    var portfolioItemList = this.state.dataItems.map((item, ind) => {

      return (<PortfolioItemComponent key={ind} data={item}/>)
    })

    return (
      <div id='portfolio'>
        <h1>I enjoy experimenting with a lot of cool technologies over the past few years.</h1>
        <p>I have also done a lot of project in classes throughout my time at Georgia Tech.</p>
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
