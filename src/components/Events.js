import React, { Component } from "react";
import Particle from "./Particle";

export default class Events extends Component {
  render() {
    return (
      <div id="events">
        <div className="container">
          <div className="section-title">
            <h2 align="center">EVENTS</h2>
          </div>
          <div className="row">
            <div className="col-md-12 align-self-center">
              <p className="contnt" align="justify">
              The National Convention stands tall to provide significant opportunities to the students to 
              showcase their ideas and technical skills. With this, the convention tries to bring in a 
              notable  contribution to the Nation’s Dream of being an IT superpower globally. 
              The convention consists of five different events that fall under various categories. 
              The convention invites students from various parts of the country to provide a platform for 
              knowledge dissemination and cultural exchange.
              </p>
            </div>
          </div>
          <br />
          <div className="row pt-5 m-auto">
            {/* card 1 */}
            <div className="col-sm-12 col-md-6 col-lg-4 pb-3 order-2 order-lg-1 ">
              <div className="card card-custom bg-white border-white border-0  ">
                <div className="card-custom-img "><Particle /></div>
                <div className="card-custom-avatar">
                  <div className="service-icon">
                    <span>
                      <i
                        className="fa fa-question fa-4x"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>

                  {/* <img
                    class="img-fluid"
                     src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
                    alt="Avatar"
                  /> */}
                </div>
                <div className="card-body">
                  <h4 className="card-title" >TECHNICAL QUIZ</h4>
                  <p className="card-text " align="justify">
                  The quizzes are based on information technology, information and communication technology, and computer sciences. Participants would have to correctly answer the questions asked in the stipulated time.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-light"></div>
              </div>
            </div>
                {/* card 2  price money */}
            {/* price money */}
            <div className="square col-sm-12 col-md-6 col-lg-4 pb-3 order-1 order-lg-2">
            <div className="price card card-custom bg-white border-white border-0 " >
              <div>
                 
                  <div style={{fontSize:"85px" , marginLeft:'20px'}}>
                    14 
                  </div>
                  <div style={{fontSize:"85px", marginLeft:"125px",marginTop:"-50px" }}>
                     &
                  </div>
  
                  <div style={{fontSize:"85px",marginLeft:"220px" , marginTop:"-50px"}}>
                    15
                  </div>
                </div>
                </div>
            </div>
            {/* card 3 */}
            <div className="col-sm-12 col-md-6 col-lg-4 pb-3 order-3 order-lg-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img"><Particle /></div>
                <div className="card-custom-avatar">
                  <div className="service-icon">
                    <span>
                      <i
                        className="fa fa-file-code-o fa-4x"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>

                  {/* <img
                    class="img-fluid"
                     src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
                    alt="Avatar"
                  /> */}
                </div>
                <div className="card-body">
                  <h4 className="card-title">PROJECT CONTEST</h4>
                  <p className="card-text m-4" align="justify">
                  In this event, Undergraduate and Postgraduate students have to present their project along supplemented by the running code.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-light"></div>
              </div>
            </div>

            {/* card 4 , 5 , 6 */}
          </div>
          <div className="row pt-5 m-auto">
            {/* card 1 */}
            <div className="col-sm-12 col-md-6 col-lg-4 pb-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img"><Particle /></div>
                <div className="card-custom-avatar">
                  <div className="service-icon">
                    <span>
                      <i className="fa fa-code fa-4x" aria-hidden="true"></i>
                    </span>
                  </div>

                  {/* <img
                    class="img-fluid"
                     src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
                    alt="Avatar"
                  /> */}
                </div>
                <div className="card-body">
                  <h4 className="card-title">PROGRAMMING CONTEST</h4>
                  <p className="card-text m-4" align="justify">
                  Participants would be required to write the code for the provided problem. The problems would be allotted to the participants on the spot.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-light"></div>
              </div>
            </div>

            {/* price money */}
            <div className="col-sm-12 col-md-6 col-lg-4 pb-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img"><Particle /></div>
                <div className="card-custom-avatar">
                  <div className="service-icon">
                    <span>
                      <i
                        className="fa fa-lightbulb-o fa-4x"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>

                  {/* <img
                    class="img-fluid"
                     src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
                    alt="Avatar"
                  /> */}
                </div>
                <div className="card-body">
                  <h4 className="card-title"> POSTER    DESIGNING</h4>
                  <p className="card-text m-4" align="justify">
                  Participants would have to display their ideas with regards to their posters and showcase their poster making skills and abilities.


                  </p>
                </div>
                <div className="card-footer bg-transparent border-light"></div>
              </div>
            </div>
            {/* card 2 */}
            <div className="col-sm-12 col-md-6 col-lg-4 pb-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img"><Particle /></div>
                <div className="card-custom-avatar">
                  <div className="service-icon">
                    <span>
                      <i className="fa fa-edit fa-4x" aria-hidden="true"></i>
                    </span>
                  </div>

                  {/* <img
                    class="img-fluid"
                     src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
                    alt="Avatar"
                  /> */}
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    RESEARCH PUBLICATION & ARTICLES
                  </h4>
                  <p className="card-text m-3" align="justify">
                  In this event, participants would be needed to prepare or create Research Publications & Articles. Submissions of the same should be done by the provided date.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-light"></div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
