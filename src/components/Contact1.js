import React, { Component } from "react";
import emailjs from "emailjs-com";
import "../index.css";

class Contact1 extends Component {
  render() {
    function sendEmail(e) {
      e.preventDefault();

  emailjs.sendForm('gmail', 'kaushal_temp', e.target, 'user_OFB6lgw7EXkNxNDKf9iob')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      
  }

    return (
      <div id="contact">
        
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-12 col-md-4 order-1 order-lg-1 justify-content-center mx-auto">
              <div className="contact-item one">
                <h3>CSI-SB Co-ordinator</h3>
                <p>
                  <span>
                    <i className="fa fa-user"></i>Mr. Vijay Prakash
                  </span>
                </p>
              </div>
              <div className="contact-item one">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                    <a href="tel:9993390764">9993390764</a>
                  </span>
                </p>
              </div>
              <div className="contact-item one">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                    <a href="tel: 7974344929">7974344929</a>
                  </span>
                </p>
              </div>
              <div className="contact-item one">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i>
                    <a href="mailto:vijayprakash15@gmail.com">
                      vijayprakash15@gmail.com
                    </a>
                  </span>
                </p>
              </div>
              {/* coordinator contacts ends */}
              <br />
              <br />
              <br />
            
              {/* Student contact */}
              
              {/* student contact ends */}
            </div>
            {/* part 1 ends */}
            {/* Contact Info */}
            {/* part 2 */}
            <div className="col-sm-12 col-md-4 order-3 order-lg-2 mx-auto">
              <div className="text-center">
                <h3>Drop us a line</h3>
                <form name="sentMessage" id="contactForm" noValidate onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                          name="name"
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
                          name="email"
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
                      name="message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-light btn-lg rounded-pill" >
                    Send Message
                  </button>
                </form>
                {/* part 2 ends */}
              </div>
            </div>
            <div className="col-sm-12 col-md-4 order-2 order-lg-3 ">
            <div className="contact-item three ">
                <h3>Student Co-ordinator</h3>
                <p>
                  <span>
                    <i className="fa fa-user"></i>Ankur Singh Tomar
                  </span>
                </p>
              </div>
              <div className="contact-item three">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                    <a href="tel: 8871003213">8871003213</a>
                  </span>
                </p>
              </div>
              <div className="contact-item three">
                <p>
                  <span>
                    <i className="fa fa-user"></i>Kanhaiya Sharma
                  </span>
                </p>
              </div>
              <div className="contact-item three">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                    <a href="tel: 9617138985">9617138985</a>
                  </span>
                </p>
              </div>
              <div className="contact-item three">
                <p>
                  <span>
                    <i className="fa fa-user"></i>Taher Kapadia
                  </span>
                </p>
              </div>
              <div className="contact-item three">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                    <a href="tel: 8965086788">8965086788</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* socila icons */}

          <div className="col-md-12" align="center">
            <div className="row  justify-content-center">
              <div className="social">
                <div className="ul">
                  <li>
                    <a target="_blank" href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.linkedin.com/in/csi-svvv-indore-7449561b7/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://instagram.com/csi_svvv?igshid=hmdts6mjvc6m">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
export default Contact1;
