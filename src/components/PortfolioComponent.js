import React, {Component} from 'react'
import PortfolioItemComponent from './PortfolioItemComponent.js'
class PortfolioComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onPortfolioItemClick = this.onPortfolioItemClick.bind(this)
    this.state.dataItems = [
      {
        idName: 'sepsisResearch',
        url: 'https://github.com/saqibm128/sepsisProject',
        imgLink: 'img/embc.png',
        imgHref: 'https://drive.google.com/file/d/1gaoJys1nc7knThafesXc7E72D1Ly-QTW/view?usp=sharing',
        name: 'Sepsis Research Project',
        description: 'A multisemester research project using advanced data cleaning alongside ML techniques',
        shouldExpand: false
      }, {
        idName: 'candyProject',
        url: 'https://github.com/Saqibm128/Candy-Visualization',
        imgHref: 'http://ec2-18-217-140-91.us-east-2.compute.amazonaws.com:8000/',
        imgLink: 'img/candyProject.png',
        name: 'Candy Visualization',
        description: 'A multigraph data visualization of survey data of favorite candies.',
        shouldExpand: false
      }, {
        idName: 'portfolioPage',
        url: 'https://github.com/Saqibm128/Saqibm128.github.io/tree/react',
        imgLink: 'img/portfolioSite.png',
        name: 'Portfolio Website',
        description: 'This Website! My portfolio driven by React and Bootstrap and hacked up over two weekends',
        shouldExpand: false
      }, {
        idName: 'weekAtAGlanse',
        url: 'https://github.com/Saqibm128/weekAtAGlanseAPI',
        imgLink: 'img/weekAtAGlanse.PNG',
        name: 'Week At A Glan$e',
        description: 'A React app using ESRI map technology backed by a Flask server backend using SQLServer',
        shouldExpand: false
      }, {
        idName: 'ticTacToeRobot',
        url: 'https://github.com/Saqibm128/3790-cozmo',
        imgLink: 'img/cozmo.jpg',
        imgHref: 'https://docs.google.com/document/d/1vhKRjn3CHxUjeBYBFbBGabb28uuDLMMKIAsD3rlVdE0/edit?usp=sharing',
        name: 'Robot Tic Tac Toe',
        description: 'Programming a simple robot, Cozmo, to play Tic Tac Toe with a human',
        shouldExpand: false
      }, {
        idName: 'BHIProject',
        url: 'https://github.com/Saqibm128/BHIProject',
        imgLink: 'img/ebola.png',
        name: 'Ebola Model Simulation',
        description: 'A GUI for modeling the 2014 Ebola epidemic in West Africa',
        shouldExpand: false
      }, {
        idName: 'ECG Grapher',
        url: 'https://github.com/Saqibm128/pqrs-identifier',
        imgLink: 'img/ptqrs.png',
        name: 'ECG Grapher, Analyzer',
        description: 'An implementation of PQRS identifier for ECG signals, in both MatLab and LabView',
        shouldExpand: false
      }, {
        idName: 'movieSelector',
        url: 'https://github.com/JavaTheHutt2340/MovieSelector',
        imgLink: 'img/movieSelector.png',
        name: 'Movie Selector Android App',
        description: '2340 Group Project to do advanced querying on Rotten Tomatoes API and to share movies on Facebook',
        shouldExpand: false
      }, {
        idName: 'ultimateTicTacToe',
        url: 'https://github.com/Saqibm128/UltimateTicTacToe',
        imgLink: 'img/ultimateTicTacToe.png',
        name: 'Ultimate Tic Tac Toe',
        description: 'A JavaFX program for playing a 3x3x3 game of Tic Tac Toe',
        shouldExpand: false
      }
    ]
  }
  onPortfolioItemClick() {

  }
  render() {
    var portfolioItemList = []
    var i = 0;
    //gonna hardcode in some **special** items first
    // for (i = i; i < 1; i++) {
    // portfolioItemList.push(
    //     <div className='row portfolio' key={i}>
    //       <PortfolioItemComponent onClick={this.onPortfolioItemClick} key={this.state.dataItems[i].idName} data={this.state.dataItems[i]}/>
    //         <PortfolioItemComponent onClick={this.onPortfolioItemClick} key={this.state.dataItems[i + 1].idName} data={this.state.dataItems[i + 1]}/>
    //
    //     </div>
    //   );
    // }
    // i++;

    for (i = i; i < this.state.dataItems.length; i+=3) {

      var end = i + 3 < this.state.dataItems.length
        ? i + 3
        : this.state.dataItems.length
      portfolioItemList.push(
        <div className='row portfolio' key={i}>
          {this.state.dataItems.slice(i, end).map((item) => <PortfolioItemComponent onClick={this.onPortfolioItemClick} key={item.idName} data={item}/>)}
        </div>
      )
    }

    return (
      <div id='portfolio'>
        <h1>I enjoy experimenting with a lot of cool technologies over the past few years.</h1>
        <p>I have also done a lot of project in classes throughout my time at Georgia Tech.</p>
        <div className='container portfolio'>
          {portfolioItemList}
        </div>
        <br/>
        <br/>
      </div>
    )

  }
}

export default PortfolioComponent
