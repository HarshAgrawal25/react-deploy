import React, { useContext } from "react";

import { RightSideBarContext } from "..";
import { Link } from "react-scroll";
import BurgerButton1 from "../BurgerButton/BurgerButton1";

const RightSection = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(RightSideBarContext);
  return (
    <div
      className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${
        isShowSidebar ? "show" : "hide"
      }`}
    >
      <div className="LeftSideBar__LeftSection__topWrapper">
        <BurgerButton1 onClick={() => setIsShowSidebar(false)} />
      </div>
      <ul className="LeftSideBar__LeftSection__menuWrapper">
        <li>
          <Link
            className="text"
            onClick={() => setIsShowSidebar(false)}
            to="header"
            spy={true}
            smooth={true}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
           className="text"
            onClick={() => setIsShowSidebar(false)}
            to="about1"
            spy={true}
            smooth={true}
          >
            About
          </Link>
        </li>

        <li>
          <Link
           className="text"
            onClick={() => setIsShowSidebar(false)}
            to="events"
            spy={true}
            smooth={true}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
           className="text"
            onClick={() => setIsShowSidebar(false)}
            to="instruction"
            spy={true}
            smooth={true}
          >
            Registration
          </Link>
        </li>
        <li>
          <Link
           className="text"
            onClick={() => setIsShowSidebar(false)}
            to="carousel-generic"
            spy={true}
            smooth={true}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
           className="text"
            onClick={() => setIsShowSidebar(false)}
            to="supporters"
            spy={true}
            smooth={true}
          >
            Sponsors
          </Link>
        </li>
        
        <li>
          <Link
           className="text"
            onClick={() => setIsShowSidebar(false)}
            to="contact"
            spy={true}
            smooth={true}
          >
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RightSection;
