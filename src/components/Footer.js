import React, { Component } from 'react';
import {Link , Route} from "react-router-dom"
import developed from './developed';
class Footer extends Component {
    render() {
        return (
            <div align="center" id="footer">
              <div className="ff">©CSI-SVVV 2020 |Designed And Developed by
              <Link to="/developed" >
                  <span>    Team</span> 
                  
                <i className="fa fa-arrow-down" /></Link></div>
              <Route
                   exact   path="/developed"
                    component={developed}
                />
            </div>
        )
    }
}

export default Footer

