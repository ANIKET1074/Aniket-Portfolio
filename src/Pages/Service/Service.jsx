import React, { useEffect } from "react";
import "./Service.css";
import { services } from "../../Data/Service";
import ServicesCard from "../../Components/ServicesCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  const service = services.data;

  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 2000,
      offset: 120,
    });
  }, []);
  return (
    <>
      <div className="services min-h-fit mt-[5rem]" id="service">
        <h2 className="font-bold text-5xl text-center">Services</h2>
        <div className="borderBottom w-[100%] m-auto ">
          <div className="border2"></div>
          <div className="border1 "></div>
          <div className="border2"></div>
        </div>
        <div className="service__border m-auto border-2 rounded-[1rem] border-[#5219d1]  p-[4rem] shadow-2xl h-full flex justify-center w-[70%] mt-[3rem]">
          <div className="serv flex gap-[3.25rem] flex-wrap justify-center m-auto">
            {service.map((dt, index) => {
              return (
                <ServicesCard
                  key={index}
                  image={dt.image}
                  name={dt.name}
                  aos="fade-up"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
