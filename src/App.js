import React, { Component , useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Contact from './components/Contact'
import About from './components/About'
import Sponsors from './components/Sponsors'
import Instruction from './components/Instruction'
import Events from './components/Events'
import Poster from './components/Poster'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About1 from './components/About1';
import Header from './components/Header';
import SidebarNav from './components/SidebarNav';

const App = () => {
    let [menuState, setMenuState] = useState(false);
    return (
      <BrowserRouter>
       
          <Header menuState={menuState} setMenuState={setMenuState} />
          <SidebarNav menuState={menuState} setMenuState={setMenuState} />
           
                    <Home />
                    <About1 />
                    <About />
                    <Instruction />
                    <Sponsors />
                    <Gallery />
                    <Poster />
                    <Events />
                    <Contact />
             
       
      </BrowserRouter>
    );
  };
// export class App extends Component {
  
//     render() {
//         let [menuState, setMenuState] = useState(false);
//         return (
          
//                 <BrowserRouter>
                    
//                     <Header menuState={menuState} setMenuState={setMenuState} />
//                     <SidebarNav menuState={menuState} setMenuState={setMenuState} />
//                     {/* <Navbar /> */}
//                     <Home />
//                     <About1 />
//                     <About />
//                     <Instruction />
//                     <Sponsors />
//                     <Gallery />
//                     <Poster />
//                     <Events />

//                     <Contact />
//                 </BrowserRouter >
           
//         )
//     };
// };

export default App
