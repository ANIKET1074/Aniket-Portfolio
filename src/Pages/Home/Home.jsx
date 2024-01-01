import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Home.css";
import homeImg from "../../../public/images/profile/my-profile1.png";
import twitterLogo from "../../../public/images/icons/twitter.svg";
import githubLogo from "../../../public/images/icons/octocat.svg";
import linkeDinLogo from "../../../public/images/icons/linkedin.svg";
import astric from "../../../public/images/svg-icons/Asterick.png";
import astricFull from "../../../public/images/svg-icons/Asterick-full.png";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Innovator",
      "Problem Solver",
      "Final Year Student",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });
  return (
    <>
      <div className="home flex pt-[2rem] pb-[4rem] h-full flex-wrap" id="home">
        <div className="desc flex flex-[50%] mb-[3rem] mt-[2rem] justify-center">
          <div className=" md:h-[35%] md:w-[65%] content flex-col">
            <h2 className="font-medium text-[3.25rem] myName text-[#5219d1]">
              Aniket Jadav
            </h2>
            <div className="heading flex items-center h-[2rem] ">
              <span className=" text-[1.75rem] ">{text}</span>
              <span className=" text-[1.75rem] ">
                <Cursor cursorStyle="|" cursorBlink />
              </span>
            </div>
            <div className="my-12 quote">
              <blockquote className="relative">
                <p className="description mt-[1rem] before:content-['\201C'] before:font-serif before:absolute before:top-[5px] before:left-[-35px] before:text-[5rem]  before:opacity-50 before:transform after:content-['\201D'] after:font-serif after:absolute after:-bottom-6 after:right-[152px] after:text-[5rem] after:opacity-50 after:transform after:-translate-x-2 after:-translate-y-2 text-3xl">
                  The best way to predict your future is to create it.
                </p>
              </blockquote>
            </div>
            <div className="btn">
              <a
                id="btns"
                href="/src/Data/Resume/Aniket-Resume.pdf"
                className="btns flex mt-[2rem] font-bold w-[10rem] justify-center border-4 border-[#521d91] bg-gradient-to-tl from-[#4a42ec] bg-[#521d91] shadow-lg text-white rounded-full p-3 gap-3 hover:shadow-lg hover:shadow-indigo-400"
                download
              >
                Download CV
              </a>
            </div>
            <div className="links flex gap-[2rem] justify-start items-center mt-[2rem]  ">
              <a
                href="https://github.com/ANIKET1074"
                className="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubLogo}
                  alt=""
                  className="w-[2.5rem] h-[2.5rem] bg-gradient-to-tl from-[#4a42ec] bg-[#521d91] rounded-[100%] border border-[#521d91] hover:scale-110 duration-500 ease-in-out"
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
                  className="w-[2.5rem] h-[2.5rem] bg-gradient-to-tl from-[#4a42ec] bg-[#521d91] border border-[#521d91] rounded-full hover:scale-110 duration-500 ease-in-out"
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
                  className="w-[2.5rem] bg-gradient-to-tl from-[#4a42ec] bg-[#521d91] border border-[#521d91] rounded-full h-[2.5rem] hover:scale-110 duration-500 ease-in-out"
                />
              </a>
            </div>
            <div className="astric w-[30%] mt-[3rem] ">
              <img src={astricFull} alt="" className="w-[40%]" />
            </div>
          </div>
        </div>

        <div className="myImage flex flex-[50%] h-[50%] justify-center pt-3">
          <div className="profileImage w-[100%] h-[100%] flex ">
            <img src={homeImg} alt="" className="myImg " />
            {/* <img src={Ldots} alt="" className="w-[18%] h-[18%]" /> */}
          </div>
          <div className="star w-[10%] mt-[1rem]">
            <img src={astric} alt="" className="h-[25%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
