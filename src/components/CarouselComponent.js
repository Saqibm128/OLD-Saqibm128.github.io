import React, {Component} from 'react'

class CarouselComponent extends Component {
  render() {
    return (
      <div id="mainCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#mainCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#mainCarousel" data-slide-to="1"></li>
          <li data-target="#mainCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img className="first-slide" src="./img/patchwork4.jpg" alt="Aweful Patchwork Quilt Image I took from webs and edited"/>
            <div className="container">
              <div className="carousel-caption">
                <h1 className="hard-to-see">Portfolio</h1>
                <p className="hard-to-see">A collection of work I created from classNamees, research, and plain old side projects</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#portfolio" role="button">Portfolio</a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img className="second-slide" src="./img/books.jpg.webp" alt="Second slide"/>
            <div className="container">
              <div className="carousel-caption">
                <h1 className="hard-to-see">Mohammed Saqib, At Your Service</h1>
                <p className="hard-to-see">I'm a third year kid at GT.</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#about" role="button">Learn More About Me</a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="third-slide" src="img/paper-people-background1.jpg" alt="Third slide"/>
            <div className="container">
              <div className="carousel-caption">
                <h1 className="hard-to-see">The first step...</h1>
                <p className="hard-to-see">Go ahead. Do it. Let's learn about me!</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#contact" role="button">Contact Me</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}
export default CarouselComponent
