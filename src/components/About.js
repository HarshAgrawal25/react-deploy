import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="section-title">
          <h2 align="center" className="my-5"> ABOUT SVVV </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/about%20svvv%2FADMIN%20VIEW.jpg?alt=media&token=05709d7e-162e-4a35-b710-deaeb3ca6407"
                className=" third img-fluid  img-responsive"
                alt="img-responsive"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/about%20svvv%2FACADEMIC%20VIEW.jpg?alt=media&token=6001c9e9-6c61-4f4e-ab08-57ba8861bbb2"
                className="third img-fluid img-responsive"
                alt="img-responsive"
              />{" "}
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                height="190px"
                width="350px"
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/about%20svvv%2FLIBRARY%20VIEW.jpg?alt=media&token=f23a1c2b-abce-426d-bd2d-92425f1543b4"
                className="third img-fluid img-responsive"
                alt="img-responsive"
              />{" "}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
              <br /> <br />
              <p align="justify">
                {" "}
                Shri Vaishnav Vidyapeeth Vishwavidyalaya is a private university
                established under Madhya Pradesh Niji Vishwavidyalaya ( Sthapana
                Avam Sanchalan) Adhiniyam in 2015 at Indore MP(India). The
                University has been established with a vision to be leader in
                shaping better future for mankind through quality education,
                training and research. It shall pursue the mission to make a
                difference in sustaining the growth of global societies by
                developing socially responsible citizens. Value based education
                being at the helm, the University shall promote endurance,
                excellence, fairness, honesty and transparency as its core
                values.{" "}
              </p>
              <p align="justify">
                Some of the objectives of the University are as under:
              </p>
              <ul>
                <li>
                  To provide teaching and training in higher education and make
                  provision for research as well as advancement and
                  dissemination of knowledge.
                </li>
                <li>
                  To ensure world class quality in its offerings and create
                  higher levels of intellectual abilities.
                </li>
                <li>
                  To create centres of excellence for research and development
                  for sharing knowledge and its applications.
                </li>
              </ul>
              <p align="justify">
               
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}
