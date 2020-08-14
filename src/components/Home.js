import React, { Component } from 'react'
import Navbar from './Navbar';
import Kaushal from './Kaushal';
class Home extends Component {
    render() {
        return (
        <div id="home">
           <section id="home" className="d-flex align-items-center">
               <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1><Kaushal /> 2.0 </h1>
                                <h2 className="my-3">CSI NATIONAL CONCLAVE CUM SYMPOSIUM</h2>
                                <div className="mt-3">
                                    <a href="" className="btn btn-primary btn-lg rounded-pill">Enroll Now</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src="images/Home/home.jpg" className="img-fluid" alt="home img"  />
                            </div>
                            </div>
                        </div> 
                    </div>
                </div> 
           </section>
           </div>
        )
    }
}

export default Home
