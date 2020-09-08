import React, { Component } from "react";
import { Link } from "react-scroll";
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
                    <h2 className="data my-3">
                      CSI <span className="national">NATIONAL CONCLAVE</span> CUM <span className="sym">SYMPOSIUM</span>
                    </h2>
                    <div className="date ">
                      <i className="fa fa-calendar" />
                          <span className="date-text">
                         14 - 15 October, 2020
                         </span>
                    </div>
                    {/* <div className="date ml-4 pl-3">
                      <i className=" fa fa-map-marker" />
                      <span className="date-online-text">
                        Online
                      </span>
                    </div> */}
                    <div className="mt-3 ">
                      <Link
                        to="instruction"
                        smooth={true}
                        href=""
                        className="btn btn-primary btn-lg rounded-pill"
                      >
                        Register Now<i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="blue col-lg-6  order-1 order-lg-2 header-img my-lg-5 my-sm-0">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/home.jpg?alt=media&token=2d1e419b-aaa6-4849-a91f-6a32d8c9579b"
                      className="img-fluid"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
         <br /><br />
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
