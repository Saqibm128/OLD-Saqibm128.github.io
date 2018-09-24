import React, {Component} from 'react'

class MenuHeading extends Component {
  constructor(props) {
    super(props)
    this.updateNavbar = this.updateNavbar.bind(this)
  }
  updateNavbar() {
    //TODO: fix this code to make navbar opaque when scrolled to top
  }
  render() {
    return (
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav mr-auto'>
              {this.props.subComponents.map((subComp, index) => (
                <li key={subComp.title} className={index === 0 ? 'nav-item active' : 'nav-item'}>
                  <a className='nav-link' href={subComp.hreflink}>{subComp.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
    )
  }
}
export default MenuHeading
