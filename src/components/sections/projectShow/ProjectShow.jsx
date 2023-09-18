import React from "react";
import pj1 from "../../../assets/projectPhoto/pj1.png";
import pj2 from "../../../assets/projectPhoto/pj2.png";
import pj3 from "../../../assets/projectPhoto/pj3.png";
import pj4 from "../../../assets/projectPhoto/pj4.png";
import pj5 from "../../../assets/projectPhoto/pj5.png";
import pj6 from "../../../assets/projectPhoto/pj6.png";
import pj7 from "../../../assets/projectPhoto/pj7.png";
import "./projectShow.css";
import Banner from "../../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ProjectShow = () => {
  return (
    <div className="w-[100%] flex flex-col gap-16 justify-center bg-[#FFFFFF] dark:bg-[#000000] duration-200">
      <div className="w-[90%] mt-16 max-sm:mt-20 flex gap-5 flex-col justify-center mx-auto">
        <h1 className=" text-center">
          <Banner title="Recent Project" />
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1200"
          className="w-[70%] mx-auto text-[#0B0B13] dark:text-[#ccc] text-center tracking-wider text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem
          culpa nulla unde voluptatum. Iusto dolorum omnis unde debitis minima?
          Odio provident vel voluptatibus magni, sint minus repudiandae facilis
          et.
        </p>
      </div>
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-24 mx-auto gap-10 ">
        {/* project card  */}
        <div
          className="cursor-pointer "
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="50">
          <a
            href="https://edu-pro-site-c.netlify.app/"
            className=" card duration-300 overflow-hidden py-5 flex flex-col gap-3 bg-[#F7F7FF] dark:bg-[#0B0B13] rounded-md shadow-md">
            <img src={pj1} className="w-[100%]" />
            <h1 className="text-[#0B0B13] dark:text-[#FFFFFF] text-lg tracking-wide font-medium text-center">
              Frontend Web Design
            </h1>
            <div className="flex my-3 gap-5 mx-auto">
              <a
                href="https://edu-pro-site-c.netlify.app/"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Demo
              </a>
              <a
                href="https://github.com/hoshikwyw/Edu-Pro"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Git Hub
              </a>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="cursor-pointer">
          <a
            href="https://oro-music-player.netlify.app/"
            className=" card duration-300 overflow-hidden py-5 flex flex-col gap-3 bg-[#F7F7FF] dark:bg-[#0B0B13] rounded-md shadow-md">
            <img src={pj7} className="w-[100%]" />
            <h1 className="text-[#0B0B13] dark:text-[#FFFFFF] text-lg tracking-wide font-medium text-center">
              Oro's Music Player
            </h1>
            <div className="flex my-3 gap-5 mx-auto">
              <a
                href="https://oro-music-player.netlify.app/"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Demo
              </a>
              <a
                href="https://github.com/hoshikwyw/Music-Player-App"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Git Hub
              </a>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="cursor-pointer">
          <a
            href="https://my-food-blog-1712.netlify.app/"
            className=" card duration-300 overflow-hidden py-5 flex flex-col gap-3 bg-[#F7F7FF] dark:bg-[#0B0B13] rounded-md shadow-md">
            <img src={pj5} className="w-[100%]" />
            <h1 className="text-[#0B0B13] dark:text-[#FFFFFF] text-lg tracking-wide font-medium text-center">
              Fooddy Blog
            </h1>
            <div className="flex my-3 gap-5 mx-auto">
              <a
                href="https://my-food-blog-1712.netlify.app/"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Demo
              </a>
              <a
                href="https://github.com/hoshikwyw/Food-Blog"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Git Hub
              </a>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="cursor-pointer ">
          <a
            href="https://edu-pro-dashboard-c.netlify.app/"
            className=" card dark:card-shadow duration-300 overflow-hidden py-5 flex flex-col gap-3 bg-[#F7F7FF] dark:bg-[#0B0B13] rounded-md shadow-md">
            <img src={pj2} className="w-[100%]" />
            <h1 className="text-[#0B0B13] dark:text-[#FFFFFF] text-lg tracking-wide font-medium text-center">
              Dashboard Web Design
            </h1>
            <div className="flex my-3 gap-5 mx-auto">
              <a
                href="https://edu-pro-dashboard-c.netlify.app/"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Demo
              </a>
              <a
                href="https://github.com/hoshikwyw/Edu_Pro_Dashboard"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Git Hub
              </a>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="cursor-pointer ">
          <a
            href="https://contact-app-c.netlify.app/"
            className=" card duration-300 overflow-hidden py-5 flex flex-col gap-3 bg-[#F7F7FF] dark:bg-[#0B0B13] rounded-md shadow-md">
            <img src={pj3} className="w-[100%]" />
            <h1 className="text-[#0B0B13] dark:text-[#FFFFFF] text-lg tracking-wide font-medium text-center">
              Contact Web Design
            </h1>
            <div className="flex my-3 gap-5 mx-auto">
              <a
                href="https://contact-app-c.netlify.app/"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Demo
              </a>
              <a
                href="https://github.com/hoshikwyw/Contact-web"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Git Hub
              </a>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="cursor-pointer ">
          <a
            href="https://tic-tac-toe-053.netlify.app/"
            className=" card duration-300 overflow-hidden py-5 flex flex-col gap-3 bg-[#F7F7FF] dark:bg-[#0B0B13] rounded-md shadow-md">
            <img src={pj4} className="w-[100%]" />
            <h1 className="text-[#0B0B13] dark:text-[#FFFFFF] text-lg tracking-wide font-medium text-center">
              Tic-Tac-Toe Game
            </h1>
            <div className="flex my-3 gap-5 mx-auto">
              <a
                href="https://tic-tac-toe-053.netlify.app/"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Demo
              </a>
              <a
                href="https://github.com/hoshikwyw/tic-tac-toe-game"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Git Hub
              </a>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="cursor-pointer">
          <a
            href="https://meterbill-calculating-6def80.netlify.app/"
            className=" card duration-300 overflow-hidden py-5 flex flex-col gap-3 bg-[#F7F7FF] dark:bg-[#0B0B13] rounded-md shadow-md">
            <img src={pj6} className="w-[100%]" />
            <h1 className="text-[#0B0B13] dark:text-[#FFFFFF] text-lg tracking-wide font-medium text-center">
              Meter-bill calculator
            </h1>
            <div className="flex my-3 gap-5 mx-auto">
              <a
                href="https://meterbill-calculating-6def80.netlify.app/"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Demo
              </a>
              <a
                href="https://github.com/hoshikwyw/meter-bill-calculate"
                className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Git Hub
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
