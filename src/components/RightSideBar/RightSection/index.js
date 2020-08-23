import React, { useContext } from "react";
import BurgerButton from "../BurgerButton/BurgerButton";
import { RightSideBarContext } from "..";
import { Link } from "react-scroll";

const RightSection = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(RightSideBarContext);
  return (
    <div
      className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${
        isShowSidebar ? "show" : "hide"
      }`}
    >
      <div className="LeftSideBar__LeftSection__topWrapper">
        <BurgerButton onClick={() => setIsShowSidebar(false)} />
      </div>
      <ul className="LeftSideBar__LeftSection__menuWrapper">
        <li>
          <Link
            onClick={() => setIsShowSidebar(false)}
            to="home"
            spy={true}
            smooth={true}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
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
