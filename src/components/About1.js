import React, { Component } from "react";

class About1 extends Component {
  render() {
    return (
      <div id="about1">
        <div className="background">
          <h1>Kaushal 2.0 </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <h2>About Kaushal</h2>
              <p align="justify">
                Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore under the aegis
                of Shri Vaishnav Shaikshanik Parmarthik Nyas, Indore (M.P.) is
                organizing a National Level Computer Society of India
                Convention– “KAUSHAL-20” on the theme of “Recent Digital
                Technology advancement” from 19/03/2020 to 20/03/2020. The
                objective of this National Convention is to provide a phenomenal
                opportunity for the students to showcase their technical skills,
                ideas and or implementations as a cherishing outcome in the
                contribution to the Nation’s Dream of IT superpower globally.The
                convention will consisted of 09 events such as workshops,
                research articles, project contest, key note addresses, web &
                mobile design application, programming contest,idea poster and
                startup, technical treasure hunt & technical quiz contest. The
                convention will provide fruitful knowledge dissemination and
                cultural exchange among students from various parts of the
                country. Attractive Prizes Worth Rs 1,00,000 (Exclusive Awards,
                Cash Prizes, Speacial Recognitions, Recognized Certificates and
                many more).
              </p>
            </div>
            <div className="camera col-sm-12 col-md-4 d-flex justify-content-end">
              <img
                className="aws img-fluid"
                src="/images/About/camera.png"
                alt="camera"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About1;
