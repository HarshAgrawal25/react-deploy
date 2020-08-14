import React from "react";


export default function Instruction() {
  return (
    <div className="Instruction">
        <div className="container">
      <h1>
        <b>Event Schedule</b>
      </h1>
      <button type="button" class="btn btn-warning">
        Day 1
      </button>
      &nbsp;
      <button type="button" class="btn btn-dark">
        Day 2
      </button>
      <hr></hr>
      <section>
        <div class="container-fluid">
          <h1 class="text-center text-captitalize pt-5">
            <b>Instructions for Registration</b>
          </h1>
          <hr class="w-25 mx-auto" />
          <h2 class="bold">Step 1</h2>
          <p class="pt-4">
            Pay your respective amount via paytm for single event. (Rs.100/- per
            Event ) Note: You can register for a single event at a time, If you
            want to register for more than one events, you have to register
            again with new event by repeating same steps
          </p>
          <hr class="w-70 mx-auto" />
          <h3>Option 1</h3>
          <p class="pt-3">
            For payment go to this link &nbsp;
            <b>https://paytm.com/education </b>&nbsp; Click on this link Select
            Institute Location as Madhya Pradesh, Indore Select Institute as
            Shri Vaishnav Vidyapeeth Vishwavidhyalaya and then Select Institute
            Area as Kaushal2020 Fill the respective details and make payment.
          </p>
          <hr class="w-25 mx-auto" />
          <h3>Option 2</h3>
          <p class="pt-3">
            For direct payment use this link&nbsp;&nbsp;
            <b>http://bit.ly/kaushal_paytm</b>&nbsp; Click on this link. Fill
            the respective details and make payment.
          </p>
          <hr class="w-25 mx-auto" />
          <h3>Option 3</h3>
          <p class="pt-3">Scan This QR code only by Paytm scanner</p>
          <div class="center">
            <div class="col-lg-6 col-md-6 col-12"></div>
            {/* <img src="/images/Instruction/paytm.png" alt="" /> */}
          </div>
          <hr class="w-70 mx-auto" />
          <h2 class="bold">Step 2</h2>
          <button type="button" class="btn btn-warning">
            Submit your Registration Details Here
          </button>
          <hr class="w-150 mx-auto" />
        </div>
      </section>
      </div>
    </div>
  );
}