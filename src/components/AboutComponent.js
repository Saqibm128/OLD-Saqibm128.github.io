import React, {Component} from 'react'

class AboutComponent extends Component {
  render() {
    return (
      <div className='content text-center'>
        <div id='about'>
          <br/>
          <br/>
          <div className='row'>
            <div className='col col-xs-6'>
              <img src='img/slightlyBetterProfilePic.jpg'/>
            </div>
            <div className='col col-xs-6'>

              <h1 className='toggle'>About me</h1>
              <p>I am a fourth year student at Georgia Tech. I am currently working at
                <a href='https://Patientco.com'>Patientco</a>
                for my Spring 2018 rotation.</p>
              <p>I am majoring in both Biomedical Engineering and Computer Science currently.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default AboutComponent
