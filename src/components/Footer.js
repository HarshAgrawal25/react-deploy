import React, { Component } from 'react';
import {Link , Route} from "react-router-dom"
import developed from './developed';
class Footer extends Component {
    render() {
        return (
            <div align="center">
              Designed And Developed by
              <Link to="/developed"> React</Link>
              <Route
                   exact   path="/developed"
                    component={developed}
                />
            </div>
        )
    }
}

export default Footer

