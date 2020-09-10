
// Complete React Code 
import React from 'react'; 
 
import Particles from 'react-particles-js'; 
   
function Particle() { 
  return ( 
    <div className="App"> 
     
      <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 800, 
              } 
            }, 
          },
          shape: {
            type: "circle",
            stroke: {
              width: 67,
              color: "#000000",
            }}, 
        }} 
      /> 
   
    </div> 
  ); 
} 
   
export default Particle;