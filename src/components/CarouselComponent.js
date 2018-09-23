import React, {Component} from 'react'

class CarouselComponent extends Component {
  render() {
    console.log(this.props.subComponents)
    var carouselItems = this.props.subComponents.map((compData, id) => (<div key={id} className={id === 0  ? 'carousel-item active' : 'carousel-item'}>
      <img src={compData.imgLink}/>
      <div className='container'>
        <div className='carousel-caption'>
          <h1 className='hard-to-see'>{compData.title}</h1>
          <p className='hard-to-see'>{compData.description}</p>
          <p>
            <a className='btn btn-lg btn-primary' href={compData.hreflink} role='button'>{compData.button}</a>
          </p>
        </div>
      </div>
    </div>))
    return (
      <div id='mainCarousel' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          {
            this.props.subComponents.map((compData, id) => {
            if (id === 0) {
              return <li key={id} data-target='#mainCarousel' data-slide-to={id} className='active'></li>
            }
            return <li key={id} data-target='#mainCarousel' data-slide-to={id}></li>
          })
        }
        </ol>
        <div className='carousel-inner'>
          {
            carouselItems
          }
        </div>
        <a className='carousel-control-prev' href='#mainCarousel' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next' href='#mainCarousel' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    )
  }
}
export default CarouselComponent
