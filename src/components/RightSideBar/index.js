import React, { useState } from 'react';
import HeaderTry1 from '../HeaderTry1';
import RightSection from './RightSection';

export const RightSideBarContext = React.createContext({})
const RightSideBar =() =>{
    const [isShowSidebar, setIsShowSidebar] = useState(false);   
        return (
            <RightSideBarContext.Provider
            value={{ isShowSidebar, setIsShowSidebar }}
            >
            <div className="RightSideBar_Container">
            <div
                className={`LeftSideBar__container__overlay LeftSideBar__container__overlay--${isShowSidebar ? 'show' : 'hide'}`}
                role="button"
                onClick={() => setIsShowSidebar(false)}
            ></div>
                
                    <HeaderTry1 />
                    <RightSection />
            </div>
            </RightSideBarContext.Provider>
        )
    }


export default RightSideBar
