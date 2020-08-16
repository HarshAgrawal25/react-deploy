import React, { Component } from "react";

export default class Events extends Component {
  render() {
    return (
      <div id="events">
        <div class="container">
          <div classs="section-title">
            <h1 align="center">EVENTS</h1>
          </div>
          <div className="row">
            <div className="col-md-12 align-self-center">
              <p className="contnt">
                Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore under the aegis
                of Shri Vaishnav Shaikshanik awam Parmarthik Nyas, Indore (M.P.)
                is organizing a National Level Computer ociety of India
                Convention– “KAUSHAL-20” on the theme of “Recent Digital
                Technology advancement” from 15/03/2019 to 16/03/2019. The
                objective of this National Convention is to provide a phenomenal
                opportunity for the students to showcase their technical skills,
                ideas and/or implementations as a cherishing outcome in the
                contribution to the Nation’s Dream of IT superpower globally.The
                convention will consisted of 07 events such as workshops,
                research articles, project contest, key note addresses, web &
                mobile design application, programming contest & technical quiz
                contest. The convention will provide fruitful knowledge
                dissemination and cultural exchange among students from various
                parts of the country.
              </p>
            </div>
          </div>
          <br />
          <div className="row pt-5 m-auto">
            {/* card 1 */}
            <div className="col-sm-12 col-md-6 col-lg-4 pb-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img ">
                  <p>1</p>
                </div>
                <div className="card-custom-avatar">
                  <div class="service-icon">
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
                  <h4 className="card-title">TECHNICAL QUIZ</h4>
                  <p className="card-text">
                    Card has minimum height set but will expand if more space is
                    needed for card body content. You can use Bootstrap to align
                    multiple cards nicely in a row.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-light">
                  <a href="#" className="btn btn-primary">
                    Enroll
                  </a>
                </div>
              </div>
            </div>

            {/* price money */}
            <div className="col-sm-12 col-md-6 col-lg-4 pb-3">
              <p>
                Attractive prices worth &#8377; 1 Lakh and Internship offers and
                many more
              </p>
            </div>
            {/* card 2 */}
            <div className="col-sm-12 col-md-6 col-lg-4 pb-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img"></div>
                <div className="card-custom-avatar">
                  <div class="service-icon">
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
                  <p className="card-text">
                    In this event UG/PG students have to present their project
                    along with running code.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-light">
                  <a href="#" className="btn btn-primary">
                    Enroll
                  </a>
                </div>
              </div>
            </div>

            {/* card 3 , 4 , 5 */}
          </div>
          <div className="row pt-5 m-auto">
            {/* card 1 */}
            <div className="col-sm-12 col-md-6 col-lg-4 pb-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img"></div>
                <div className="card-custom-avatar">
                  <div class="service-icon">
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
                  <p className="card-text">
                    Participant has to write code for a given problem.Problem
                    statement will be given on spot to the participants.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-light">
                  <a href="#" className="btn btn-primary">
                    Enroll
                  </a>
                </div>
              </div>
            </div>

            {/* price money */}
            <div className="col-sm-12 col-md-6 col-lg-4 pb-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img"></div>
                <div className="card-custom-avatar">
                  <div class="service-icon">
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
                  <h4 className="card-title">IDEA POSTER AND STARTUP</h4>
                  <p className="card-text">
                    Participant has to show case idea for their poster and show
                    their poster making ability
                  </p>
                </div>
                <div className="card-footer bg-transparent border-light">
                  <a href="#" className="btn btn-primary">
                    Enroll
                  </a>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="col-sm-12 col-md-6 col-lg-4 pb-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img"></div>
                <div className="card-custom-avatar">
                  <div class="service-icon">
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
                  <p className="card-text">
                    In this event participants prepare/create Research
                    Publications & Articles.It should be submitted on given
                    date.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-light">
                  <a href="#" className="btn btn-primary">
                    Enroll
                  </a>
                </div>
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
