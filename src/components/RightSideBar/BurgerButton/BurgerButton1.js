import React from 'react';


const BurgerButton1 = ({ onClick }) => {
  return (
    <div
      className="LeftSideBar__BurgerButton1"
      role="button"
      onClick={onClick}
    >
      <i></i>
      <i></i>
      <i></i>
    </div>
  );
};

export default BurgerButton1;