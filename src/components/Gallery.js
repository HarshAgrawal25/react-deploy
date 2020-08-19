import React, { Component } from "react";

export default class Gallery extends Component {
  render() {
    return (
      <div class="container" id="carousel-example-generic">
        <h1 align="center">
          <br /> GALLERY{" "}
        </h1>
        <br />
        <br />
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 img-fluid"
                src="/images/gallery/1.jpg"
                alt="Zero slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 img-fluid"
                src="/images/gallery/2.jpg"
                alt="main slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 img-fluid"
                src="/images/gallery/3.jpg"
                alt="first slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 img-fluid"
                src="/images/gallery/4.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 img-fluid"
                src="/images/gallery/5.jpg"
                alt="Third slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 img-fluid"
                src="/images/gallery/6.jpg"
                alt="fourth slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 img-fluid"
                src="/images/gallery/7.jpg"
                alt="fifth slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 img-fluid"
                src="/images/gallery/8.jpg"
                alt="sixth slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
