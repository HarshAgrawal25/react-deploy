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
                ABOUT KAUSHAL <span>2.0</span>
              </h2>

              <p align="justify" className="py-lg-100px py-sm-0">
                Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore under the aegis
                of Shri Vaishnav Shaikshanik Parmarthik Nyas, Indore (M.P.) is
                organizing a National Level Computer Society of India
                Convention– “KAUSHAL-2.0” on the theme of “Digital Transformation
                for Sustainable Development” from 14/10/2020 to 15/10/2020. The
                objective of this National Convention is to provide a phenomenal
                opportunity for the students to showcase their technical skills,
                ideas and or implementations as a cherishing outcome in the
                contribution to the Nation’s Dream of IT superpower globally.
              </p>
              <p align="justify" className="mb-5 pb-5">
                The convention will consisted of 05 events such as workshops,
                research articles, project contest, key note addresses, web &
                mobile design application, programming contest,idea poster and
                startup, & technical quiz contest.
               { /* The
                convention will provide fruitful knowledge dissemination and
                cultural exchange among students from various parts of the
               country. */ }
                Attractive Prizes Worth Rs 1,00,000 (Exclusive Awards,    
                Cash Prizes, Speacial Recognitions, Recognized Certificates and
                many more).
              </p>
            </div>
            <div className="camera col-sm-12 col-md-4 d-flex justify-content-end order-1 order-lg-2">
              <img
                className="aws img-fluid"
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/camera2.png?alt=media&token=a962e2bc-e189-4ca6-86e9-4253d3a953bb"
                alt="camera"
              ></img>
              <img
                className="aws-phone img fluid"
                align="center"
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/camera3.jpg?alt=media&token=f7420f5e-6245-4b2d-9bd1-632dff62e006"
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
