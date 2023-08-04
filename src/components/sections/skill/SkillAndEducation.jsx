import React from "react";
import Skill from "./Skill";
import Education from "./Education";
import Banner from "../../Banner/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const SkillAndEducation = () => {
  return (
    <div >
      <div className=" w-[90%] mx-auto  ">
        {/* <h2 className=" text-left text-3xl font-bold dark:text-white">
          
        </h2> */}
        <Banner title="Education & Skills" />
        <div className=" flex flex-col lg:flex-row gap-12 lg:gap-[7%] mt-10">
          {/* education  */}
          <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" lg:w-[33%] md:w-full bg-[#f7f7ff] dark:bg-[#0b0b13] rounded p-3">
            <Education />
          </div>
          {/* skill  */}
          <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="50"
          className=" lg:w-[60%] md:w-full">
            <Skill />
          </div>
        </div>
        {/* hr  */}
        <div className=" w-[90%] pb-0 mt-16 mx-auto background bg-[url(https://nairo.ibthemespro.com/img/border-dark.png)] dark:invert"></div>
      </div>
    </div>
  );
};

export default SkillAndEducation;
