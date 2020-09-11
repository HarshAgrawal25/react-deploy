import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";


const ScrollUp = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () =>
     window.scrollTo({ top: 0, behavior: "smooth", smooth: "true" });
    
  if (!visible) {
    return false;
  }

  return (
    <div id="scroll">
      <div
        className="scroll-to-top cursor-pointer text-right"
        onClick={scrollToTop}
      >
        <i className="icon fa fa-angle-up fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default ScrollUp;
