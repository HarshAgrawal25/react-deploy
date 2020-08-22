import React, { Component } from "react";

export default class Faq extends Component {
  render() {
    return (
      <div id="faq" className="row accordion-gradient-bcg d-flex justify-content-center">
        <div class="col-md-10 col-xl-6 py-5">
          <div
            class="accordion md-accordion accordion-2"
            id="accordionEx7"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="container">
              <h2 align="center">F.A.Q. </h2>
              <br />
            </div>
            <div class="card">
              <div
                class="card-header rgba-stylish-strong z-depth-1 mb-1"
                role="tab"
                id="heading1"
              >
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx7"
                  href="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  <h5 class="mb-0 white-text text-uppercase font-thin">
                    Who can participate in kaushal-2.0
                    <i class="fa fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
              </div>

              <div
                id="collapse1"
                class="collapse show"
                role="tabpanel"
                aria-labelledby="heading1"
                data-parent="#accordionEx7"
              >
                <div class="card-body mb-1 rgba-grey-light white-text">
                  <p>
                    Students pursuing Btech, BE, Mtech, ME, BCA, MCA, Bsc &
                    other revalent branch(CS, IT or EC) intrested participants
                    are eligible.
                  </p>
                </div>
              </div>
            </div>
            <br />

            <div class="card">
              <div
                class="card-header rgba-stylish-strong z-depth-1 mb-1"
                role="tab"
                id="heading2"
              >
                <a
                  class="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordionEx7"
                  href="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  <h5 class="mb-0 white-text text-uppercase font-thin">
                    Can a student participate in multiple events ?{" "}
                    <i class="fa fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
              </div>

              <div
                id="collapse2"
                class="collapse"
                role="tabpanel"
                aria-labelledby="heading2"
                data-parent="#accordionEx7"
              >
                <div class="card-body mb-1 rgba-grey-light white-text">
                  <p>
                    Yes. It depends on student in how many contest he/she had
                    register. For Each Contest student has to register again .
                  </p>
                </div>
              </div>
            </div>
            <br />

            <div class="card">
              <div
                class="card-header rgba-stylish-strong z-depth-1 mb-1"
                role="tab"
                id="heading3"
              >
                <a
                  class="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordionEx7"
                  href="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  <h5 class="mb-0 white-text text-uppercase font-thin">
                    How can i register for kaushal-20{" "}
                    <i class="fa fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
              </div>

              <div
                id="collapse3"
                class="collapse"
                role="tabpanel"
                aria-labelledby="heading3"
                data-parent="#accordionEx7"
              >
                <div class="card-body mb-1 rgba-grey-light white-text">
                  <p>
                    Read the Registration Instruction carefully and If cannot
                    then contact any Student Co-ordinator.
                  </p>
                </div>
              </div>
            </div>
            <br />

            <div class="card">
              <div
                class="card-header rgba-stylish-strong z-depth-1 mb-1"
                role="tab"
                id="heading3"
              >
                <a
                  class="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordionEx7"
                  href="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  <h5 class="mb-0 white-text text-uppercase font-thin">
                    How will I get Certificate if i am of another city/state ?{" "}
                    <i class="fa fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
              </div>

              <div
                id="collapse3"
                class="collapse"
                role="tabpanel"
                aria-labelledby="heading3"
                data-parent="#accordionEx7"
              >
                <div class="card-body mb-1 rgba-grey-light white-text">
                  <p>
                    Please provide your exact details to any of student
                    co-ordinator or office bearer member.
                  </p>
                </div>
              </div>
            </div>
            <br />

            <div class="card">
              <div
                class="card-header rgba-stylish-strong z-depth-1 mb-1"
                role="tab"
                id="heading3"
              >
                <a
                  class="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordionEx7"
                  href="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  <h5 class="mb-0 white-text text-uppercase font-thin">
                    How can I reach to SVVV Campus{" "}
                    <i class="fa fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
              </div>

              <div
                id="collapse3"
                class="collapse"
                role="tabpanel"
                aria-labelledby="heading3"
                data-parent="#accordionEx7"
              >
                <div class="card-body mb-1 rgba-grey-light white-text">
                  <p>
                    You Can reach university campus by using our bus service .
                    It runs from various location throught Indore, Ujjain, Dewas
                    . For other student (except svvv student) buses will also be
                    running from various location
                  </p>
                </div>
              </div>
            </div>
            <br />

            <div class="card">
              <div
                class="card-header rgba-stylish-strong z-depth-1 mb-1"
                role="tab"
                id="heading3"
              >
                <a
                  class="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordionEx7"
                  href="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  <h5 class="mb-0 white-text text-uppercase font-thin">
                    Is Offline/On Spot Registration will available{" "}
                    <i class="fa fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
              </div>

              <div
                id="collapse3"
                class="collapse"
                role="tabpanel"
                aria-labelledby="heading3"
                data-parent="#accordionEx7"
              >
                <div class="card-body mb-1 rgba-grey-light white-text">
                  <p>
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
    );
  }
}
