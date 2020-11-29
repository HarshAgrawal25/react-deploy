import React, { Component } from "react";

export default class Posters extends Component {
  render() {
    return (
      <div className="container my-4 py-5" id="carousel-example-generic">
        <h1 align="center"> </h1>
        <br />

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-60 img-fluid"
                src=" https://firebasestorage.googleapis.com/v0/b/kaushal-5e8bb.appspot.com/o/csi-01.jpg?alt=media&token=75428dfe-e233-4a31-8ad9-852ae18b9dd3"
                alt="Zero slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-60 img-fluid"
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-5e8bb.appspot.com/o/WhatsApp%20Image%202020-11-29%20at%203.25.15%20PM.jpeg?alt=media&token=34908a22-cb42-4823-bdfb-11a880abd906
                "
                alt="main slide"
               
              />
              </div>
             <div className="carousel-item">
              <img
                className="d-block w-60 img-fluid"
                src=" https://firebasestorage.googleapis.com/v0/b/kaushal-5e8bb.appspot.com/o/Brochure-1.jpg?alt=media&token=ba69e067-924c-40fe-894a-ea812b472c26"
                alt="/"
              />
            </div> 
             <div className="carousel-item">
              <img
                className="d-block w-60 img-fluid"
                src=" https://firebasestorage.googleapis.com/v0/b/kaushal-5e8bb.appspot.com/o/Brochure-2.jpg?alt=media&token=3c6701a7-5fe9-468e-a05b-2a8934bd4cd5"
                alt="/"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
