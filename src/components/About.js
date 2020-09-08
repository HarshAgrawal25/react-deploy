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
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/svvv.jpg?alt=media&token=61fca821-e285-453e-a41b-8e3709e0c5f2"
                className="img-fluid  img-responsive"
                alt="img-responsive"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/svvv2.jpg?alt=media&token=085752c9-758c-498b-9b63-1045a2a45242"
                className="img-fluid img-responsive"
                alt="img-responsive"
              />{" "}
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/svvv3.jpg?alt=media&token=141ac639-b0d8-4779-93c5-fe516077663a"
                className="img-fluid img-responsive"
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
