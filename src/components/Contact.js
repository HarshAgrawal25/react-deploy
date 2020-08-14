import React, { Component } from "react";
import "../index.css";
class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-6   justify-content-center">
              <div className="contact-item">
                <h3>CSI-SB Co-ordinator</h3>
                <p>
                  <span>
                    <i className="fa fa-user"></i> Mr. Vijay Prakash
                  </span>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                    <a href="tel:9993390764">9993390764</a>
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                    <a href="tel: 7974344929"> 7974344929</a>
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i>
                    <a href="mailto:vijayprakash15@gmail.com">
                      {" "}
                      vijayprakash15@gmail.com
                    </a>
                  </span>{" "}
                </p>
              </div>
              {/* coordinator contacts ends */}
              <br />
              <br />
              <br />

              {/* Student contact */}
              <div className="contact-item">
                <h3>Student Co-ordinator</h3>
                <p>
                  <span>
                    <i className="fa fa-user"></i>Ankur Singh Tomar
                  </span>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> 
                    <a href="tel: 8871003213"> 8871003213</a>
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-user"></i>Kanhaiya Sharma
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                    <a href="tel: 9617138985">9617138985</a>
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-user"></i>Taher Kapedia
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                      <a href="tel: 8965086788">8965086788</a>
                  </span>{" "}
                </p>
              </div>
              {/* student contact ends */}
            </div>
            {/* part 1 ends */}
            {/* Contact Info */}
            {/* part 2 */}
            <div className="col-12 col-sm-6 ">
              <div className="text-center">
                <h3>Drop us a line</h3>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="3"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom">
                    Send Message
                  </button>
                </form>
                {/* part 2 ends */}
              </div>
            </div>
          </div>
          {/* socila icons */}

          <div className="col-md-12">
            <div className="row  justify-content-center">
             
                <div className="social">
                  <ul>
                    <li>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
