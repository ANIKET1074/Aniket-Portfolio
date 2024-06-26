import React, { useEffect } from "react";
import "./Education.css";
import education from "../../assets/images/svg-icons/graduation-cap.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({
      delay: 50,
      duration: 2000,
      offset: 120,
    });
  }, []);
  return (
    <>
      {" "}
      <div
        className="md:h-[55rem] py-[5rem] text-center relative mt-[2rem] rounded-t-[10rem] rounded-b-[10rem]"
        id="education"
      >
        <div>
          <h1 className="text-5xl font-bold">Education</h1>
          <div className="borderBottom w-[100%] m-auto ">
            <div className="border2"></div>
            <div className="border1 "></div>
            <div className="border2"></div>
          </div>
          <div className="flex gap-[1.2rem] items-center justify-center"></div>
        </div>
        <div className="education">
          <div className="timeline try">
            <div className="container try " data-aos="fade-up">
              <div className="logo w-[2rem] h-[2rem] rounded-full bg-gradient-to-tl from-[#4a42ec] to-[#521d91] bg-[#521d91] shadow-lg"></div>
              <div className="textbox" data-aos="fade-up">
                <div className="t-left">
                  <img
                    src={education}
                    alt=""
                    className="w-[3rem] justify-center"
                  />
                </div>
                <div className="t-right">
                  <span className="text-[#0b0c10] font-semibold border-b-2 border-black">
                    2017-2018
                  </span>
                  <div className="tr-content mt-[1rem]">
                    <div className="text-[#0b0c10] text-[1rem] font-bold">
                      Secondary School
                    </div>
                    <div className="text-[#0b0c10] text-[1rem]">
                      Ashramshala Bhaktashram Eng Med-Navsari
                    </div>
                  </div>
                </div>
                <span className="arrow "></span>
              </div>
            </div>
            <div className="container try">
              <div className="logo w-[2rem] h-[2rem] rounded-full bg-gradient-to-tl from-[#4a42ec] to-[#521d91] bg-[#521d91] shadow-lg"></div>
              <div className="textbox" data-aos="fade-up">
                <div className="t-left">
                  <img
                    src={education}
                    alt=""
                    className="w-[3rem] justify-center"
                  />
                </div>
                <div className="t-right">
                  <span className="text-[#0b0c10] font-semibold border-b-2 border-black">
                    2018-2020
                  </span>
                  <div className="tr-content mt-[1rem]">
                    <span className="text-[#0b0c10] text-[1rem] font-bold">
                      Higher Secondary School
                    </span>
                    <span className="text-[#0b0c10] text-[1rem]">
                      Ashramshala Bhaktashram Eng Med-Navsari
                    </span>
                  </div>
                </div>
                <span className="arrow"></span>
              </div>
            </div>
            <div className="container try">
              <div className="logo w-[2rem] h-[2rem] rounded-full bg-gradient-to-tl from-[#4a42ec] to-[#521d91] bg-[#521d91] shadow-lg"></div>
              <div className="textbox" data-aos="fade-up">
                <div className="t-left">
                  <img
                    src={education}
                    alt=""
                    className="w-[2rem] justify-center"
                  />
                </div>
                <div className="t-right">
                  <span className="text-[#0b0c10] font-semibold border-b-2 border-black">
                    2020-2024
                  </span>
                  <div className="tr-content mt-[1rem]">
                    <span className="text-[#0b0c10] text-[1rem] font-bold">
                      B.E in Computer Engineering
                    </span>
                    <span className="text-[#0b0c10] text-[1rem]">
                      Government Engineering College,Gandhinagar
                    </span>
                    {/* <span className="text-[#0b0c10] text-[1rem]">
                      Gandhinagar
                    </span> */}
                  </div>
                </div>
                <span className="arrow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
