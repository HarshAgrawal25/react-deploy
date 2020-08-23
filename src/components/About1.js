import React, { Component } from "react";

class About1 extends Component {
  render() {
    return (
      <div id="about1">
        {/* <div className="background" width="">
          <h1>Kaushal 2.0 </h1>
        </div> */}
        <div className="container">
          <div className="row">
            <h2 className="head-phone col-sm-12">
              <br />
              ABOUT KAUSHAL 2.0
            </h2>
            <div className="col-sm-12 col-md-8 order-2 order-lg-1">
              {/* <h2 style={{color:"red"}}>
                
                 About Kaushal
                </h2> */}

              <h2 className="head col-sm-12">
                <br />
                ABOUT KAUSHAL 2.0
              </h2>

              <p align="justify" className="py-lg-100px py-sm-0">
                Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore under the aegis
                of Shri Vaishnav Shaikshanik Parmarthik Nyas, Indore (M.P.) is
                organizing a National Level Computer Society of India
                Convention– “KAUSHAL-20” on the theme of “Recent Digital
                Technology advancement” from 19/03/2020 to 20/03/2020. The
                objective of this National Convention is to provide a phenomenal
                opportunity for the students to showcase their technical skills,
                ideas and or implementations as a cherishing outcome in the
                contribution to the Nation’s Dream of IT superpower globally.
              </p>
              <p align="justify" className="mb-5 pb-5">
                The convention will consisted of 09 events such as workshops,
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
            <div className="camera col-sm-12 col-md-4 d-flex justify-content-end order-1 order-lg-2">
              <img
                className="aws img-fluid"
                src="/images/About/camera2.png"
                alt="camera"
              ></img>
              <img
                className="aws-phone img fluid"
                align="center"
                src="/images/About/camera3.jpg"
                alt="camera-phone"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About1;
