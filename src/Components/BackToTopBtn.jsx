import React, { useEffect, useState } from "react";
import arrowUp from "../assets/images/svg-icons/arrow-up.svg";

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 30);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <button id="topbtn" onClick={scrollToTop}>
          <img src={arrowUp} alt="" />
        </button>
      )}
    </>
  );
};

export default BackToTopBtn;
