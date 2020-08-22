import React, { useContext } from "react";
import BurgerButton from "./RightSideBar/BurgerButton/BurgerButton";
import { RightSideBarContext } from "./RightSideBar";
import { Link } from "react-router-dom";
const HeaderTry = (props) => {
  const { setIsShowSidebar } = useContext(RightSideBarContext);

  return (
    <div id="header">
      <div className="container navbar site-header">
        <div className="brand-icon">
          <Link to="/">
            <span>
              <img src="/images/Navbar/logo.png" className="head img-fluid" />
            </span>
          </Link>
        </div>

        {/* <Link href="javascript:void(0)" className="ham-burger">
          <span></span>
          <span></span>
        </Link> */}
        <div className="d-flex justify-content-end">
          <div className="LeftSideBar__TopSection">
            <BurgerButton onClick={() => setIsShowSidebar(true)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTry;
