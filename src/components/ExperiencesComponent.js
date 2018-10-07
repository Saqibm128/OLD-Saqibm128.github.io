import React, {Component} from 'react'
class ExperiencesComponent extends Component {
  constructor(props) {
    super(props)
    this.dataItems = [
      {
        id: "patientco",
        title: 'Patientco',
        description: 'I was a co-op at Patientco from Summer 2017 to Fall 2018.',
        detailedDescription: 'I learned key aspects of web development, including backend APIs and frontend development, as well as important business logic',
        technologies: ["PHP", "Golang", "Kubernetes", "JavaScript", "AngularJS"],
        hrefLink: "patientco.com",
        imgLink: "img/patientco.png"
      }, {
        id: "miblab",
        title: 'MIBLAB',
        description: 'I was an undergraduate researcher for MIBLAB from Fall 2017 to Summer 2018.',
        detailedDescription: 'I researched early life-threatening sepsis detection using the public MIMIC dataset. I presented my findings at EMBC 2018 as lead author.',
        technologies: ["Python", "Pandas", "Sklearn", "Pytorch", "Matplotlib", "SQL"],
        hrefLink: "https://miblab.bme.gatech.edu/people/",
        imgLink: "img/miblab.png"
      }, {
        id: "undergradTA",
        title: 'CS 2340 TA',
        description: 'I was an undergraduate Teaching Assistant for CS 2340',
        detailedDescription: 'I helped students create semester long Android projects and taught OOD principles.',
        technologies: ["Java", "Android"],
        imgLink: "img/cs2340.png"
        // hrefLink: "https://miblab.bme.gatech.edu/people/"
      },

    ]
  }
  render() {

    return (
      <div id='experiences' className="container">
        {
          this.dataItems.map((item) =>
          <div id={item.id} key={item.id}>
        <div  className='row experience container-item'>
          {item.imgLink &&
            <div className="col-3">
              <img src={item.imgLink}/>
          </div>
        }
          <div className={!!item.imgLink ? "col-9" : "col-12"}>
          <a href={item.hrefLink}><h2>{item.title}</h2></a>
          <h3>{item.description}</h3>
          <p>{item.detailedDescription}</p>
          </div>
        </div>

        <br />
        </div>
      )
      }
        <br/>
        <br/>
      </div>
    )

  }
}

export default ExperiencesComponent
