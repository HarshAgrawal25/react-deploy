import React, { useContext } from "react";
import BurgerButton from "./RightSideBar/BurgerButton/BurgerButton";
import { RightSideBarContext } from "./RightSideBar";

const HeaderTry = (props) => {
  const { setIsShowSidebar } = useContext(RightSideBarContext);

  return (
    <div id="header">
      <div className="container navbar site-header">
        <div className="brand-icon">
          
            <span>
              <img src="/images/Navbar/logo.png" className="head img-fluid" />
            </span>
          
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
