import Carousel from 'react-bootstrap/Carousel'  

import React, { Component } from 'react'  

export class BootstrapGallery extends Component {  
        render() {  
                return (  
                        <div>  
                         <div class='container' >  
                          <div className="row title" style={{ marginBottom: "50px" }} >  
                          <div class="col-sm-12 btn btn-warning">  
                          
                         </div>  
                         </div>  
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel interval={2500} keyboard={false} pauseOnHover={true}>  
                         <Carousel.Item style={{'height':"500px"}}  >  
                         <img style={{'height':"500px"}}  
                         className="d-block w-50"  
                        src={'images/gallery/2.jpg'}  />  
                           <Carousel.Caption>  
                             <h3> </h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  

                                 <Carousel.Item style={{'height':"500px"}}>  
                                 <img style={{'height':"500px"}}  
                                   className="d-block w-50"  
                                    src={'images/gallery/1.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3></h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item> 

                                       <Carousel.Item style={{'height':"500px"}}>  
                                       <img style={{'height':"500px"}}  
                                        className="d-block w-50"  
                                         src={'images/gallery/3.jpg'}   />  
                                        <Carousel.Caption>  
                                          <h3></h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  

                                         <Carousel.Item style={{'height':"500px"}}>  
                                 <img style={{'height':"500px"}}  
                                   className="d-block w-50"  
                                    src={'images/gallery/4.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3></h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>

                                         <Carousel.Item style={{'height':"500px"}}>  
                                 <img style={{'height':"500px"}}  
                                   className="d-block w-50"  
                                    src={'images/gallery/5.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3></h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>

                                         <Carousel.Item style={{'height':"500px"}}>  
                                 <img style={{'height':"00px"}}  
                                   className="d-block w-50"  
                                    src={'images/gallery/6.jpg'} 
                                       />  
                                       <Carousel.Caption>  
                                   <h3></h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>

                                         <Carousel.Item style={{'height':"500px"}}>  
                                 <img style={{'height':"500px"}}  
                                   className="d-block w-50"  
                                    src={'images/gallery/7.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3></h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>

                                         <Carousel.Item style={{'height':"500px"}}>  
                                 <img style={{'height':"500px"}}  
                                   className="d-block w-50"  
                                    src={'images/gallery/8.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3></h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>



                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  

export default BootstrapGallery