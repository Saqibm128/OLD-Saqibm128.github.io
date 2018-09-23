import React, {Component} from 'react'

class PortfolioComponent extends Component {
  render() {

    return (
      <div id="portfolio">
        <h1>This is an amazing website. Because it was my first website.</h1>
        <div class="row portfolio">
          <div id="candy-project" class="col portfolio port-item">
            <a href='http://ec2-18-217-140-91.us-east-2.compute.amazonaws.com:8000/'>
              <h2>Candy Visualization</h2>
            </a>
            <p>CS4460 Group Project. Turned out sweet.</p>
            <a href='http://ec2-18-217-140-91.us-east-2.compute.amazonaws.com:8000/'><img src="./img/candyProject.PNG" class="text-center mx-auto"/></a>
          </div>
          <div class="col portfolio port-item">
            <a href="https://github.com/Saqibm128/BHIProject">
              <h2>BHI Project</h2>
            </a>
            <p>BMED 4814 Group Project. MatLab GUI. Yep.</p>
            <a href='https://github.com/Saqibm128/BHIProject'><img src="./img/ebola.png" /></a>

              </div>
              <div class="col portfolio port-item">
                <h2>Ultimate Tic-Tac-Toe</h2>
                <p>Java Swing is definitely the best. (Not really.)</p>
                <a><img/></a>
              </div>
            </div>
            <br/>
            <br/>
          </div>
    )

  }
}

export default PortfolioComponent
