import React, {Component} from 'react';

import '../App.css'

export default class App extends Component {
  render(){
  return (
    
  <div id="faq" className="container">
    <div className="section-title">
            <h2 align="center">FAQs</h2>
          </div>
  <div className="row py-5">
    <div className="col-lg-9 mx-auto">
     
     <div id="accordionExample" className="accordion shadow">

                
                
              
                <div className="card">
                    <div id="headingTwo" className="card-header bg-white shadow-sm border-0">
                        <h2 className="mb-0">
                            <button type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" 
                            className="btn  collapsed text-dark font-weight-bold  collapsible-link"
                            style={{textDecoration:"none"}}>
                            Who can participate in Kaushal 2.0 ?</button>
                        </h2>
                    </div>
                    <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse">
                        <div className="card-body p-5" style={{height: "130px"}}>
                            <p className="font-weight-light m-0">Students pursuing Btech, BE, Mtech, ME, BCA, MCA, Bsc &
                      other revalent branch(CS, IT or EC) intrested participants
                      are eligible.</p>
                        </div>
                    </div>
                </div>

          
                <div className="card">
                    <div id="headingThree" className="card-header bg-white shadow-sm border-0">
                        <h2 className="mb-0">
                            <button type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" 
                            className="btn  collapsed text-dark font-weight-bold  collapsible-link">
                            Can a student participate in multiple events ?</button>
                        </h2>
                    </div>
                    <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse">
                        <div className="card-body p-5" style={{height: "130px"}}>
                            <p className="font-weight-light m-0">Yes. It depends on student in how many contest he/she had
                      register. For Each Contest student has to register again .</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div id="headingFour" className="card-header bg-white shadow-sm border-0">
                        <h2 className="mb-0">
                            <button type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" 
                            className="btn  collapsed text-dark font-weight-bold collapsible-link">
                            How can I register for Kaushal 2.0 ?</button>
                        </h2>
                    </div>
                    <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample" className="collapse">
                        <div className="card-body p-5 " style={{height: "130px"}}>
                            <p className="font-weight-light m-0">Read the Registration Instruction carefully and If cannot
                      then contact any Student Co-ordinator.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div id="headingFive" className="card-header bg-white shadow-sm border-0">
                        <h2 className="mb-0">
                            <button type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" 
                            className="btn  collapsed text-dark font-weight-bold  collapsible-link">
                            How will I get the Certificate ?</button>
                        </h2>
                    </div>
                    <div id="collapseFive" aria-labelledby="headingFive" data-parent="#accordionExample" className="collapse">
                        <div className="card-body p-5" style={{height: "130px"}}>
                            <p className="font-weight-light m-0">Please provide your exact details to any of student
                      co-ordinator or office bearer member.</p>
                        </div>
                    </div>
                </div>


                <div className="card">
                    <div id="headingSix" className="card-header bg-white shadow-sm border-0">
                        <h2 className="mb-0">
                            <button type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" 
                            className="btn  collapsed text-dark font-weight-bold collapsible-link">
                            Is Offline Registration available ?</button>
                        </h2>
                    </div>
                    <div id="collapseSix" aria-labelledby="headingSix" data-parent="#accordionExample" className="collapse">
                        <div className="card-body p-5" style={{height: "130px"}}>
                            <p className="font-weight-light m-0">No, only online registration is possible. For more information contact the CSI team.</p>
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