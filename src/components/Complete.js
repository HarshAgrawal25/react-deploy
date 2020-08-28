import React from "react";
import { BrowserRouter } from "react-router-dom";

import About from "./About";
import Instruction from "./Instruction";
import Events from "./Events";
import Home from "./Home";
import About1 from "./About1";
import Footer from "./Footer";
import ScrollUp from "./ScrollUp";
import RightSideBar from "./RightSideBar/index";
import Faq from "./Faq";
import Gallery1 from "./Gallery1";
import Posters from "./Posters";
import Contact1 from "./Contact1";
import Sponsors1 from "./Sponsors1";

import {Switch , Route} from 'react-router-dom';
import developed from './developed'

const Complete = () => {
 
  return (
    <div>
      <BrowserRouter>
        <RightSideBar />
        <Home />
        <About1 />
        <About />
        <Events />
        <Posters />
        <Instruction />
        <Gallery1 />
        <Sponsors1 />
        <Faq />
        <Contact1 />
        <Footer />
        <ScrollUp />
        {/* <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/developedBy" component={developed} />
        </Switch> */}
      </BrowserRouter>
    </div>
  );
};

export default Complete;
