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
              src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/1.jpg?alt=media&token=4c3edcb6-8d9a-4c4b-aa7e-273bbe84d456"
              alt="Zero slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid "
              src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/2.jpg?alt=media&token=0cc497c0-f33c-4feb-933f-4b91db5f9b36"
              alt="one slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/3.jpg?alt=media&token=7a55c537-5ab9-448a-956b-f9883199d422"
              alt="two slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/4.jpg?alt=media&token=117bfefa-c0f1-44c5-97fd-84899d8c09de"
              alt="three slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/5.jpg?alt=media&token=5e76d4b9-6be8-46d7-8657-79fd2d80a125"
              alt="four slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/6.jpg?alt=media&token=a7fc6cf6-fa08-4e60-8e39-5fea7761d394"
              alt="five slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/7.jpg?alt=media&token=4c7b55de-f985-44b0-9eb2-0cea6ec6385e"
              alt="six slide"
              height="150"
            />
          </div>
          <div className="item">
            <img
              className="d-block w-100 img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/8.jpg?alt=media&token=fed6dd42-9c16-4043-a5d9-bfbb64a57a04"
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
