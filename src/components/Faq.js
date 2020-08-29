import React, { Component } from "react";

export default class Faq extends Component {
  render() {
    return (
      <div id="faq" className="container">
        <div className="section-title">
            <h2 align="center">F.A.Q</h2>
          </div>
       

        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div id="accordionExample" className="accordion shadow">
              <div className="card">
                <div
                  id="headingOne"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <div
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                      className="d-block position-relative text-dark  collapsible-link py-2 head"
                    >
                      Who can participate in kaushal-2.0
                    </div>
                  </h6>
                </div>
                <div
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                  className="collapse show"
                >
                  <div className="card-body p-5  ">
                    <p className="font-weight content">
                      Students pursuing Btech, BE, Mtech, ME, BCA, MCA, Bsc &
                      other revalent branch(CS, IT or EC) intrested participants
                      are eligible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  id="headingTwo"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <div
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      className="d-block position-relative collapsed text-dark  collapsible-link py-2 head d-flex justify-content-start"
                    >
                      Can a student participate in multiple events ?
                    </div>
                  </h6>
                </div>
                <div
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                  className="collapse"
                >
                  <div className="card-body p-5">
                    <p className="font-weight-light m-0">
                      Yes. It depends on student in how many contest he/she had
                      register. For Each Contest student has to register again .
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  id="headingThree"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <div
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      className="d-block position-relative collapsed text-dark  collapsible-link py-2 head"
                    > 
                      How can i register for kaushal-20
                    </div>
                  </h6>
                </div>
                <div
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                  className="collapse"
                >
                  <div className="card-body p-5">
                    <p className="font-weight-light m-0">
                      Read the Registration Instruction carefully and If cannot
                      then contact any Student Co-ordinator.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  id="headingFour"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <div
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                      className="head d-block position-relative collapsed text-dark  collapsible-link py-2 "
                    >
                      How will I get Certificate if i am of another city/state ?
                    </div>
                  </h6>
                </div>
                <div
                  id="collapseFour"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                  className="collapse"
                >
                  <div className="card-body p-5">
                    <p className="font-weight-light m-0">
                      Please provide your exact details to any of student
                      co-ordinator or office bearer member.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  id="headingFive"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <div
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                      className="d-block position-relative collapsed text-dark  collapsible-link py- head"
                    >
                      How can I reach to SVVV Campus
                    </div>
                  </h6>
                </div>
                <div
                  id="collapseFive"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                  className="collapse"
                >
                  <div className="card-body p-5">
                    <p className="font-weight-light m-0">
                      RYou Can reach university campus by using our bus service
                      . It runs from various location throught Indore, Ujjain,
                      Dewas . For other student (except svvv student) buses will
                      also be running from various location
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  id="headingSix"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <div
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                      className="d-block position-relative collapsed text-dark  collapsible-link py-2 head"
                    >
                    <p>  Is Offline/On Spot Registration</p> <p>will available</p>
                    </div>
                  </h6>
                </div>
                <div
                  id="collapseSix"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                  className="collapse"
                >
                  <div className="card-body p-5">
                    <p className="font-weight-light m-0">
                      Yes , you have to visit svvv campus and reach out to any
                      student co-ordinator or office bearers members , also you
                      can visit cs department for more details .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
