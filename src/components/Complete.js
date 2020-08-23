import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Contact from "./Contact";
import About from "./About";
import Sponsors from "./Sponsors";
import Instruction from "./Instruction";
import Events from "./Events";
import Poster from "./Poster";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Home from "./Home";
import About1 from "./About1";
import Header from "./Header";
import SidebarNav from "./SidebarNav";
import Footer from "./Footer";
import ScrollUp from "./ScrollUp";
import RightSideBar from './RightSideBar/index'
import Faq from "./Faq";
import Gallery1 from "./Gallery1";
import Posters from "./Posters";
import Contact1 from "./Contact1";
import Sponsors1 from "./Sponsors1";
const Complete = () => {
  let [menuState, setMenuState] = useState(false);
  return (
    <div>
      <BrowserRouter>
        {/* <Header menuState={menuState} setMenuState={setMenuState} />
        <SidebarNav menuState={menuState} setMenuState={setMenuState} /> */}
        <RightSideBar />
        <Home />
        <About1 /> 
        <About />
        <Events />
        <Posters />
        <Instruction />
        <Gallery1 />
        {/* <Sponsors /> */}
        <Sponsors1 />
        
        
        {/* <Gallery /> */}
        {/* <Poster /> */}
        
        <Faq />
        <Contact1 />
        <Footer />
        <ScrollUp />
      </BrowserRouter>
    </div>
  );
};

export default Complete;
