import React from "react";
import "./Skills.css";
import { skills } from "../../Data/Skills";
import SkillCard from "../../Components/SkillCard";

const Skills = () => {
  const skill = skills.data;
  return (
    <>
      <div id="skills" className="skills ">
        <h1 className="font-bold text-5xl text-center">Skills</h1>
        <div className="borderBottom w-[100%] m-auto ">
          <div className="border2"></div>
          <div className="border1 "></div>
          <div className="border2"></div>
        </div>
        <div className="flex flex-wrap gap-11 mx-auto py-[1rem] mt-[1.5rem] w-[95%]  rounded-xl bg-transparent skill">
          <div className="slider overflow-hidden px-[2rem]">
            <div className="slide-wrapper flex gap-[2rem] bg-transparent">
              {skill.map((d, index) => {
                return (
                  <SkillCard key={index} simage={d.image} sname={d.name} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
