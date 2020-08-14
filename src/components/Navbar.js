import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
    <div id="Navbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="d-inline">
              {/* <nav className="navbar navbar-expand-lg navbar-light "> */}
              <nav className="navbar navbar-expand-lg navbar-light ">
                <NavLink className="navbar-brand" to="#">
                    <img src="/images/Navbar/logo.png" className="img-fluid" />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo02"
                >
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="#">
                        Home <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                        Link
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                        Disabled
                      </NavLink>
                    </li>
                  </ul>
                 
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Navbar;
