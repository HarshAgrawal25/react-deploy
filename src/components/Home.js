import React, { Component } from "react";
import { Link } from "react-scroll";
import Navbar from "./Navbar";
import Kaushal from "./Kaushal";
class Home extends Component {
  render() {
    return (
      <div id="home">
        <section id="home" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="content col-md-6 order-2 order-lg-1 ">
                    <div className="text ">
                      <h1>
                        <Kaushal />
                      </h1>
                    </div>
                    <h2 className="my-3 offset-md-1">
                      CSI NATIONAL CONCLAVE CUM SYMPOSIUM
                    </h2>
                    <div className="mt-3">
                      <Link
                        to="events"
                        smooth={true}
                        href=""
                        className="btn btn-primary btn-lg rounded-pill offset-md-1 "
                      >
                        Register Now<i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6  order-1 order-lg-2 header-img my-lg-5 my-sm-0">
                    <img
                      src="images/Home/home.jpg"
                      className="img-fluid"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </section>
        <Link href="#about" className="go-down"  to="about1"
                spy={true}
                smooth={true}>
            <i className="fa fa-angle-down"></i>
          </Link>
      </div>
    );
  }
}

export default Home;
