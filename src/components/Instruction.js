import React from "react";

export default function Instruction() {
  return (
    <div id="instruction">
      <div className="container py-5 my-5">
        <div className="section-title">
          <h2 align="center" className="my-5">
            Instructions for Registration
          </h2>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h1 className="heading ">Step 1</h1>
              <p className="pt-4" align="center">
                Pay your respective amount via paytm for single event. (Rs.100/-
                per Event ) Note: You can register for a single event at a time,
                If you want to register for more than one events, you have to
                register again with new event by repeating same steps
              </p>

              <h3>Option 1</h3>
              <p className="pt-3" align="center">
                For payment go to this link &nbsp;
                <b>https://paytm.com/education </b>&nbsp; Click on this link
                Select Institute Location as Madhya Pradesh, Indore Select
                Institute as Shri Vaishnav Vidyapeeth Vishwavidhyalaya and then
                Select Institute Area as Kaushal2020 Fill the respective details
                and make payment.
              </p>

              <h3>Option 2</h3>
              <p className="pt-3" align="center">
                For direct payment use this link&nbsp;&nbsp;
                <b>http://bit.ly/kaushal_paytm</b>&nbsp; Click on this link.
                Fill the respective details and make payment.
              </p>

              <h3>Option 3</h3>
              <p className="pt-3" align="center">
                Scan This QR code only by Paytm scanner
              </p>
              <div className="center">
                <div className="col-lg-6 col-md-6 col-12"></div>
                {/* <img src="/images/Instruction/paytm.png" alt="" /> */}
              </div>

              <h1 className="my-5 heading">Step 2</h1>
              <button type="button" className="btn btn-warning">
                Submit your Registration Details Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
