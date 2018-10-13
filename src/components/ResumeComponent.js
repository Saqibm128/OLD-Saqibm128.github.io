import React, {Component} from 'react'
class ResumeComponent extends Component {
  constructor(props) {
    super(props)
    this.showIframe = this.showIframe.bind(this)
    this.state = {
      'show': false
    }
  }
  showIframe() {
    this.setState((state) => ({'show': true}))
  }
  render() {
    return (
      <div id='resume' className='text-center'>
              <h3>Only need a resume?</h3>
              {
                ! this.state.show ? <h3 class='btn btn-secondary' onClick={this.showIframe}>Reveal Me</h3> :
              <iframe src="https://drive.google.com/file/d/1NKA3kC8mo_pqR0O5QvoqxlOA9wbD-bal/preview" width="640" height="480"></iframe>
              }
              <br />
              <br />
        </div>
        )
      }
    }

export default ResumeComponent
