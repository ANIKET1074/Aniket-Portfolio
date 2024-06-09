import React from "react";
import "./About.css";
import about from "../../assets/images/profile/about-img.png";

const About = () => {
  return (
    <>
      <div className="About min-h-[90vh] gap-5 " id="about">
        <h1 className="text-5xl font-bold text-center">About me</h1>
        <div className="borderBottom w-[100%] m-auto ">
          <div className="border2"></div>
          <div className="border1 "></div>
          <div className="border2"></div>
        </div>
        <div className="content1 flex justify-around mt-[2rem] h-[100%]">
          <div className="ctxt  w-[50%] mt-6">
            <p className="text-justify p-3 text-[1.1rem]">
              Hello, I'm <b>Aniket</b>, a final-year student currently pursuing
              Computer Engineering at Government Engineering College
              Gandhinagar. I specialize in Full Stack Web Development and have a
              keen interest in strengthening my mathematical fundamentals.
              <br />
              <br />
              My core skills in Front-End development, HTML, CSS, SCSS,
              JavaScript, and React-JS. Additionally, I am proficient in
              utilizing front-end frameworks such as Bootstrap and Tailwind CSS.
              On the back-end, I work with PHP and MySQL to create robust and
              dynamic applications. I have successfully completed several
              projects utilizing these technologies, showcasing my ability to
              deliver high-quality work.
              <br />
              <br />I enjoy about learning new technologies and constantly
              strive to expand my skill set. I am eager to collaborate on live
              projects, bringing my expertise.
            </p>
          </div>
          <div className="right items-center justify-center mt-[0.5rem] aboutimage w-[25%] text-center">
            <img
              src={about}
              alt=""
              className="w-[100%] m-auto rounded-xl aboutImg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
