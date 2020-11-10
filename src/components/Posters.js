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
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/Posterrr%2F1604984035175_csi-01.jpg?alt=media&token=62062125-9117-4518-82a6-17c025bda402"
                alt="Zero slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-60 img-fluid"
                src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/Posterrr%2Fpcm.png?alt=media&token=81833b61-2863-417d-9553-ee188de6381d"
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
