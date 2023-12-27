import React from "react";
import "../Pages/Project/Project.css";

const ProjectCard = ({ image, pname, skills, content, projectlink, aos }) => {
  return (
    <>
      <div
        className="flex flex-col border shadow-2xl rounded-xl bg-[white]  items-center projectCard"
        data-aos={aos}
      >
        <img
          src={image}
          alt=""
          className="w-[100%] flex h-[70%] rounded-xl p-4 bg-[white]"
        />
        <div className="content flex-col gap-2">
          <h2 className="text-center text-[1.25rem] bg-[white] flex-col font-bold items-center text-[black]">
            {pname}
          </h2>
          <span className="text-center  text-[1rem] flex text-sm px-3 bg-[white] font-medium text-[black] mt-2">
            {skills}
          </span>
        </div>

        <div className="projectDesc">
          <h2>{pname}</h2>
          <p>{content}</p>
          <a
            href={projectlink}
            rel="noreferrer"
            target="_blank"
            className="projectcode"
          >
            Code &lt;/&gt;
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
