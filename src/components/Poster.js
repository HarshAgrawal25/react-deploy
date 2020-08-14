import Carousel from 'react-bootstrap/Carousel'  

import React, { Component } from 'react'  

class Poster extends Component {  
        render() {  
                return (  
                        <div>  
                         <div class='container-fluid' >  
                          <div className="row title" style={{ marginBottom: "40px" }} >  
                          <div class="col-sm-12 btn btn-warning">  
                        
                         </div>  
                         </div>  
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel interval={1500} keyboard={false} pauseOnHover={true}>  
                         <Carousel.Item style={{'height':"600px"}}  >  
                         <img style={{'height':"600px"}}  
                         className="d-block w-100"  
                        src={'img/image1.jpg'}  />  
                           <Carousel.Caption>  
                         
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"600px"}}>  
                                 <img style={{'height':"600px"}}  
                                   className="d-block w-100"  
                                    src={'img/two.jpg'} />  
                                       <Carousel.Caption>  
                                   
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                        
                                        </Carousel>  

                                        
                                </div>  
                        </div>  
                )  
        }  
}  

export default Poster;