import React, {Component} from 'react'
import AboutMeExpandableBullet from './AboutMeExpandableBullet.js'

class AboutComponent extends Component {
  constructor(props) {
    super(props)
    this.revealReadMe = this.revealReadMe.bind(this)
    this.state = { showReadMe : false}
    this.state.bullets = [
      {
        bulletTitle: <div>I am a fourth year student at Georgia Tech.</div>,
        bulletDetails: [
                        <div>I am planning on graduating in December 2019.</div>,
                        <div>In the past I participated in GT Web Dev, HackGT, and GIT MAD.</div>,
                        <div>I've been a TA for CS 2340 for the College of Computing at Georgia Tech since 2017.</div>
                      ]

      },
      {
        bulletTitle: <div>I am majoring in both Computer Science and Biomedical Engineering.</div>,
        bulletDetails: [
                      <div>I've focused mostly on Computer Science and have attempted to take classes in BME to supplement that.</div>,
                      <div>I took classes on computationally modeling diseases and protein interactions through differential equations.</div>,
                      <div>I've had to work with large biological datasets such as NHANES and MIMIC3.</div>
        ]
      },
      {
        bulletTitle: <div>I enjoy software engineering and working on problems in a lot of different areas. I am actively seeking opportunities for Summer 2019.</div>,
        bulletDetails: [
                     <div>I like being able to learn new technologies myself through trial and error in local environments.</div>,
                     <div>I want to learn how to effectively use data to provide key insights into problems.</div>,
                     <div>I'm interested in areas where technology and healthcare intersect.</div>,
                     <div>I enjoyed working through web development on the backend as well as creating tools to support such work.</div>,
        ]
      },
      {
        bulletTitle: <div>I have finished working at
          <a href='https://Patientco.com'> Patientco </a>
          for my Fall 2018 co-op rotation.</div>,
        bulletDetails: [
          <div>I worked three rotations total: Summer 2017, Spring 2018, and Fall 2018.</div>,
          <div>During my first semester, I worked on Kubernetes and Docker containers and created a new template for Nginx and PHP services.</div>,
          <div>During my second semester, I worked on integrating Google 2FA onto the site and migrated tests to work on SauceLabs for cross-browser testing.</div>,
          <div>During my third semester, I worked as part of a team responsible for backend APIs and helped work on multiple issues on our Golang and PHP backends.</div>
        ]
      },
    ]
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
              <ul className="text-left">
              {this.state.bullets.map((data) => <AboutMeExpandableBullet bulletTitle={data.bulletTitle} bulletDetails={data.bulletDetails} /> )}
              </ul>
            </div>

          </div>
          <div>
            <h1 className='toggle readme text-center'>Additional Docs</h1>
            <div className='btn btn-lg btn-primary' onClick={this.revealReadMe}>
            <h2>README.md</h2>
            </div>
            { this.state.showReadMe &&
            <div className='revealMe read-me container-item text-left markdown-body'>
              <h1 className='text-center'>Fun Facts (Please don't take it too seriously.)</h1>
              <ol>
                <li>Close friends call me Momo. I gave myself the nickname in 9th grade and it stuck.</li>
                <li>I enjoy walking, running, biking, etc. I really want to learn to actually swim (I have terrible form).</li>
                <li>I once spoke about the virtue of mozzarella sticks to my entire high school class for 10 minutes.</li>
                <li>I still work at my father's pizza place. I get free diet cokes and can take home whatever I want at the end of the day.</li>
              </ol>
            </div>
          }
          </div>
          <br />
          <br />
        </div>
      </div>
    )
  }
}

export default AboutComponent
