import React, {Component} from 'react'

class AboutComponent extends Component {
  constructor(props) {
    super(props)
    this.revealReadMe = this.revealReadMe.bind(this)
    this.state = { showReadMe : false}
  }
  revealReadMe() {
    this.setState(state => ({showReadMe: !state.showReadMe}))
  }
  render() {
    return (
      <div className='content text-center container'>
        <div id='about'>
          <br/>
          <br/>
          <div className='row'>
            <div className='col'>
              <img src='img/slightlyBetterProfilePic.jpg'/>
            </div>
            <div className='col container-item'>

              <h1>About Me</h1>
              <p>I am a fourth year student at Georgia Tech. I am currently working at
                <a href='https://Patientco.com'> Patientco </a>
                for my Fall 2018 co-op rotation.</p>
              <p>I am majoring in both Biomedical Engineering and Computer Science.</p>
              <p>I will be graduating in May 2020.</p>
              <p>I enjoy software engineering and working on problems affecting healthcare today.</p>
              <p>I strive to improve myself and others. I believe it is my duty to do the best I can do.</p>
            </div>

          </div>
          <div>
            <h1 className='toggle readme text-center'>Additional Docs</h1>
            <div className='btn btn-lg btn-primary' onClick={this.revealReadMe}>
            <h2>README.md</h2>
            </div>
            { this.state.showReadMe &&
            <div className='revealMe read-me container'>
              <ol>
                <li>Friends call me Momo.</li>
                <li>I want to be useful and I want to learn. I like to ask questions, even if the answer is obvious.</li>
                <li>I try my best to be humble. I don't want to pretend to be an expert on anything.</li>
                <li>I am an introvert. It takes some time for me to come out of my shell.</li>
                <li>I enjoy walking, running, biking, etc. I really want to learn to actually swim (I have terrible form).</li>
                <li>I do not enjoy tech for the sake of tech. I like tech that works and has purpose. I like the struggle to get to that point.</li>
                <li>I once spoke about the virtue of mozzarella sticks to my entire high school class for 10 minutes.</li>
                <li>I still work at my father's pizza place. I am the owner's son, so I see it as part of my responsibilities.</li>
              </ol>
            </div>
          }
          </div>
        </div>
      </div>
    )
  }
}

export default AboutComponent
