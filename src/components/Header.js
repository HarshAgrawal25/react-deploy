import React from "react";
import { Link } from "react-router-dom";
/*
 * Header Component should hold the menu trigger button.
 * onClick of this button we need to show or hide the sidebar navigation
 * The Menu Toggle state is maintained in the App Component.
 */
const Header = (props) => {
  const { menuState, setMenuState } = props;
  return (
    <div id="header">
      <div className="container navbar site-header ">
        <div className="brand-icon">
          <Link to="/">
            <span>
              <img src="/images/Navbar/logo.png" className="head img-fluid" />
            </span>
          </Link>
        </div>
        <div className="d-flex justify-content-end">
          <button
            className={`menu-trigger ${menuState ? "menu-close" : ""}`}
            onClick={() => setMenuState(!menuState)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
