import React from "react";
import at from "../assets/images/svg-icons/at.svg";
import phone from "../assets/images/svg-icons/phone.svg";
import home from "../assets/images/svg-icons/home.svg";
import twitterLogo from "../assets/images/icons/twitter.svg";
import githubLogo from "../assets/images/icons/github.svg";
import linkeDinLogo from "../assets/images/icons/linkedin.svg";
import instaLogo from "../assets/images/icons/instagram.svg";

const Links = () => {
  return (
    <>
      <div className="f-right flex-1 flex flex-col gap-[2.5rem] justify-center h-[320px] m-auto px-3">
        <a
          href="mailto:aniketjadav2002@gmail.com"
          className="mail flex gap-4 w-[100%] items-center"
        >
          <img
            src={at}
            alt=""
            className="border-2 border-white rounded-full w-[2.3rem] p-1"
          />
          <span className="text-white text-lg">aniketjadav2002@gmail.com</span>
        </a>
        <a
          href="tel:+91  9106881074"
          className="mail flex gap-4 w-[100%] items-center"
        >
          <img
            src={phone}
            alt=""
            className="border-2 border-white rounded-full w-[2.3rem] p-1"
          />
          <span className="text-white text-lg">+91 9106881074</span>
        </a>
        <div className="mail flex gap-4 w-[100%] items-center">
          <img
            src={home}
            alt=""
            className="border-2 border-white rounded-full w-[2.3rem] p-1"
          />
          <span className="text-white text-lg">
            201 Kalpataru Apartment Jalalpore road Navsari
          </span>
        </div>
        <div className="links flex gap-[2rem] justify-start items-center">
          <a
            href="https://github.com/ANIKET1074"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              alt=""
              className="w-[2rem] hover:scale-110 duration-500 ease-in-out"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-jadav"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkeDinLogo}
              alt=""
              className="w-[2rem] hover:scale-110 duration-500 ease-in-out"
            />
          </a>
          <a
            href="https://twitter.com/Aniket_Jadav_19"
            className="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterLogo}
              alt=""
              className="w-[2rem] hover:scale-110 duration-500 ease-in-out"
            />
          </a>
          <a
            href="https://www.instagram.com/aniket_jadav_19"
            className="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instaLogo}
              alt=""
              className="w-[2rem] hover:scale-110 duration-500 ease-in-out"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Links;
