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
      
      <div id="details">
              <div className="section-title">
                    <h2 align = "center" className="my-5"> For More Details</h2><br/>
              </div>
              
              <div className="row" align="center">
                    <div className="col-lg-4 col-md-6 bt21">
                      <a href ="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/KAUSHAL-%20Committee-10th-11th%20Dec%2020%2C%20National%20Level%20CSI%20State%20Student%20Convention.pdf?alt=media&token=0566688c-3806-4867-82b8-1cf41681f8b4" 
                    target="_blank"  rel="noopener noreferrer"  className="btn-flip btn-flip-lg" data-back="Organising Committee" data-front="Organising Committee">.</a>
                    </div>

                    <div className="col-lg-4 col-md-6 bt22 ">
                      <a href ="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/Day-wise%20Event%20Schedule-CSI%20State%20Student%20Convention-Region-III.pdf?alt=media&token=fa20d794-91fe-4f91-adfe-ffa5111ce88b" 
                    target="_blank"  rel="noopener noreferrer"  className="btn-flip btn-group-lg" data-back="Event Schedule" data-front="Event Schedule">.</a>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 bt23">
                      <a href ="https://firebasestorage.googleapis.com/v0/b/kaushal-2020.appspot.com/o/Rules%20%26%20Instruction%20of%20Event%2C%20Contests%20of%20CSI%20State%20Student%20Convention-M.P-Region%20III.pdf?alt=media&token=9ea91a30-191b-45c0-86c9-91e0eb20e790" 
                    target="_blank"  rel="noopener noreferrer"  className="btn-flip" data-back="Rules and Regulations" data-front="Rules and Regulations">.</a>
                    </div>
            </div>
            <br /><br /><br /><br /><br />
    </div>
  </div>
  

    
    
  );
}

