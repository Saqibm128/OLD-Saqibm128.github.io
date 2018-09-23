import React, {Component} from 'react'
class ContactComponent extends Component {
  render() {
    return (
      <div id='contact'>
              <h3 className='text-center'>Contact me at <a href='mailto:saqibm128@gmail.com'>saqibm128@gmail.com</a></h3>
              <div className='row text-center'>

                <a href='https://www.linkedin.com/in/mohammed-saqib-39b019b9'><i className='fab fa-linkedin' /></a>
                <a href='https://github.com/Saqibm128'><i className='fab fa-facebook' /></a>
              </div>
            </div>
        )
      }
    }

export default ContactComponent
