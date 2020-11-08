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
              For a single event, pay your respective amount via PayTM (Rs.100/- per Event). NOTE: You can register for a single event at a time, if you want to register for more than one event, you have to register again with the new event by repeating the above mentioned steps.
              </p>

              <h3>Option 1</h3>
              <p className="pt-3" align="center">
                For payment go to this link &nbsp;
                <b><a target="_blank"  rel="noopener noreferrer" href="https://paytm.com/education">https://paytm.com/education</a> </b>&nbsp; Click on this link
                Open the link {'>'} Select Institute Location: Madhya Pradesh, Indore{'>'} Select Institute: Shri Vaishnav Vidyapeeth Vishwavidhyalaya {'>'} Select Institute Area as Kaushal2020{'>'} And by filling in the respective details and making the necessary payment.
              </p>

              <h3>Option 2</h3>
              <p className="pt-3" align="center">
                For direct payment use this link&nbsp;&nbsp;
                <b><a target="_blank"  rel="noopener noreferrer" href="http://bit.ly/kaushal_paytm">http://bit.ly/kaushal_paytm</a></b>&nbsp; Click on this link.
                Fill in the respective details and make the necessary payment. 
              </p>

              <h3>Option 3</h3>
              <p className="pt-3" align="center">
              Scan this QR code only by the Paytm scanner.
              </p>
              <div className="center">
                <div className="col-lg-6 col-md-6 col-12"></div>
                 <img
                  className="img-fluid" 
                  src="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/IMG-20200907-WA0008.jpg?alt=media&token=62e5232f-0d75-44c6-9833-c69836b1410a" 
                  height="200px"
                  width="200px"
                 alt="qrcode" /> 
              </div>

              <h1 className="my-5 heading">Step 2</h1>
              <p className="pt-3" align="center">
              Submit your Registration Details below.
              </p>
               <br />

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSesnQtm1PP5UXyJAZyWfDhVQ8OpMY8BwoGSEF88EpfRu_cNqQ/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-flip"
              data-front="Register Here"
              data-back="Register Here" >.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

