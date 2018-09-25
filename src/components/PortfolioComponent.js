import React, {Component} from 'react'
import PortfolioItemComponent from './PortfolioItemComponent.js'
class PortfolioComponent extends Component {
  constructor(props) {
    super(props)
    this.dataItems = [
      {
        idName: 'sepsisResearch',
        url: 'https://github.com/saqibm128/sepsisProject',
        imgLink: 'img/embc.png',
        imgHref: 'https://drive.google.com/file/d/1gaoJys1nc7knThafesXc7E72D1Ly-QTW/view?usp=sharing',
        name: 'Sepsis Research Project',
        description: 'A multisemester research project using advanced data cleaning alongside ML techniques'
      }, {
        idName: 'candyProject',
        url: 'https://github.com/Saqibm128/Candy-Visualization',
        imgHref: 'http://ec2-18-217-140-91.us-east-2.compute.amazonaws.com:8000/',
        imgLink: 'img/candyProject.png',
        name: 'Candy Visualization',
        description: 'A multigraph data visualization of survey data of favorite candies.'
      }, {
        idName: 'ticTacToeRobot',
        url: 'https://github.com/Saqibm128/3790-cozmo',
        imgLink: 'img/cozmo.jpg',
        imgHref: 'https://docs.google.com/document/d/1vhKRjn3CHxUjeBYBFbBGabb28uuDLMMKIAsD3rlVdE0/edit?usp=sharing',
        name: 'Robot Tic Tac Toe',
        description: 'Programming a simple robot, Cozmo, to play Tic Tac Toe with a human'
      }, {
        idName: 'BHIProject',
        url: 'https://github.com/Saqibm128/BHIProject',
        imgLink: 'img/ebola.png',
        name: 'Ebola Model Simulation',
        description: 'A GUI for modeling the 2014 Ebola epidemic'
      }, {
        idName: 'ECG Grapher',
        url: 'https://github.com/Saqibm128/pqrs-identifier',
        imgLink: 'img/ptqrs.png',
        name: 'ECG Grapher, Analyzer',
        description: 'An implementation of PQRS identifier for ECG signals, in both MatLab and LabView'
      }, {
        idName: 'ultimateTicTacToe',
        url: 'https://github.com/Saqibm128/UltimateTicTacToe',
        imgLink: 'img/ultimateTicTacToe.png',
        name: 'Ultimate Tic Tac Toe',
        description: 'A JavaFX program for playing a 3x3x3 game of Tic Tac Toe'
      }
    ]
    this.state = {
      dataItems: this.dataItems
    }
  }
  render() {
    var portfolioItemList = []
    for (var i = 0; i < Math.ceil(this.state.dataItems.length / 3.0); i++) {

      var end = i * 3 + 3 < this.state.dataItems.length
        ? i * 3 + 3
        : this.state.dataItems.length
      portfolioItemList.push(
        <div className='row portfolio'>
          {this.state.dataItems.slice(i * 3, end).map((item) => <PortfolioItemComponent key={item.idName} data={item}/>)}
        </div>
      )
    }

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
