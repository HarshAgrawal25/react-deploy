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
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/01.jpg?alt=media&token=441f0095-fc77-45d1-adc7-4193f1fbf52b"
                alt="Zero slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-60 img-fluid"
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/02.jpg?alt=media&token=d1b32c4c-087b-4c66-883b-d3c560c93025"
                alt="main slide"
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
