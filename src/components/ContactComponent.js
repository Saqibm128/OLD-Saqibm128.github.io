import React, {Component} from 'react'
class ContactComponent extends Component {
  constructor(props) {
    super(props)
    this.contacts = [{
      urlLink: 'https://www.linkedin.com/in/mohammed-saqib-39b019b9',
      iconlink: 'img/linkedin.png'
    },{
      urlLink: 'https://github.com/Saqibm128',
      iconlink: 'img/github.jpg'
    }]
  }
  render() {
    return (
      <div id='contact'>
              <h3 className='text-center'>Contact me at <a href='mailto:saqibm128@gmail.com'>saqibm128@gmail.com</a></h3>
              <div className='row text-center'>
                {this.contacts.map((cont, i) => (<div key={i}><a href={cont.urlLink}><img src={cont.iconlink} className='contact-icon' /></a></div>))}
              </div>
            </div>
        )
      }
    }

export default ContactComponent
