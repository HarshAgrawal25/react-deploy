import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  dots: true,
  autoplay: true,

  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};
class Gallery1 extends React.Component {
  render() {
    return (
      <div className="container mb-5" id="carousel-generic">
        <div className="section-title">
          <h2 align="center" className="my-5">
            {" "}
            GALLERY{" "}
          </h2>
        </div>
        <h4 align="center" className="alex my-5">
          Glimpse of Kaushal 2019
        </h4>

        <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
          <div className="item">
            <img
              className="d-block  w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/gallery-36374.appspot.com/o/1.jpg?alt=media&token=3db98aff-89fe-4814-8ae6-f9d3754898f8"
              alt="Zero slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid "
              src="https://firebasestorage.googleapis.com/v0/b/gallery-36374.appspot.com/o/2.jpg?alt=media&token=72444c9a-26d3-443a-871b-58597c99eacd"
              alt="one slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/gallery-36374.appspot.com/o/3.jpg?alt=media&token=cc5bc05e-27c5-4244-bca9-064edb89a487"
              alt="two slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/gallery-36374.appspot.com/o/4.jpg?alt=media&token=6d008392-21ce-4dd1-96c2-adc996b4f644"
              alt="three slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/gallery-36374.appspot.com/o/5.jpg?alt=media&token=5c625fd2-69e3-4ff3-a0c8-a84667c04c53"
              alt="four slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/gallery-36374.appspot.com/o/6.jpg?alt=media&token=931af65d-3149-4616-bdba-a8a77d895130"
              alt="five slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/gallery-36374.appspot.com/o/7.jpg?alt=media&token=30ba6d1a-2f65-4e3b-9169-055695c70062"
              alt="six slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/gallery-36374.appspot.com/o/8.jpg?alt=media&token=cb88d48d-08ff-4350-a5f0-bd7078d4b606"
              alt="seven slide"
              height="150"
            />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Gallery1;
