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
        <Instruction />
        <Sponsors />
        {/* <Gallery /> */}
        {/* <Poster /> */}
        <Events />
        <Faq />
        <Contact />
        <Footer />
        <ScrollUp />
      </BrowserRouter>
    </div>
  );
};

export default Complete;
