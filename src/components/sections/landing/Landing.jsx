import React, { useEffect, useRef, useState } from "react";
import "./landing.css";
import landingImg from "../../../assets/kwyw/pfpImg.png";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
// console.log(animateTextList);
import "../contact/contact.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Landing = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "../../public/khaingwutyi.pdf";
    downloadLink.download = "khaing-wut-yi-win.pdf";
    downloadLink.click();
  };
  const animateRef = useRef();
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  let index = 0;
  const textOut = (animateTextList) => {
    for (let i = 0; i < animateTextList.length; i++) {
      animateTextList[i].classList.remove("text-out");
    }

    animateTextList[index].classList.add("text-out");

    console.log();
    if (index == animateTextList.length - 1) {
      index = 0;
    } else {
      index++;
    }
  };
  const textIn = (animateTextList) => {
    for (let i = 0; i < animateTextList.length; i++) {
      animateTextList[i].classList.remove("text-in", "text-out");
    }

    animateTextList[index].classList.add("text-in");

    console.log();
    if (index == animateTextList.length - 1) {
      index = 0;
    } else {
      index++;
    }
  };

  useEffect(() => {
    const animateTextList = [...animateRef?.current?.children];
    animateTextList[1].classList.add("text-in");
    const interval = setInterval(() => {
      setTime(new Date());
      textIn(animateTextList);
    }, 3000);
    const interval2 = setInterval(() => {
      textOut(animateTextList);
      // console.log("out");
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  return (
    <>
      <div className=" dark:bg-black bg-[#FFFFFF] duration-200 hidden lg:block md:block">
        <div className=" w-[90%]  mx-auto bg-transparent -z-20 flex justify-between">
          <div className="flex max-[400px]:flex-col max-[400px]:gap-0 justify-between gap-8 pt-5">
            <p className=" dark:text-white pt-3 cursor-copy select-none hover:text-[#525fe1] active:text-[#303aad]">
              +959 798149037
            </p>
            <p className=" dark:text-white pt-3 cursor-copy  select-none hover:text-[#525fe1] active:text-[#303aad] ">
              khaingwutyiwin1712@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div
        className={`h-screen  select-none w-full overflow  flex justify-center flex-col items-center dark:bg-black bg-[#FFFFFF] duration-200`}>
        <div
          className={`w-[90%] py-5 lg:landing-Bg-After relative  flex  mx-auto justify-between items-center`}>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`w-[60%] max-lg:w-full`}>
            {/* left side body */}
            <div className="flex sm:lbg flex-col gap-y-4 md:gap-y-5 lg:gap-y-8">
              <div className={`text-[#0B0B13]  dark:text-white`}>
                Hello ~ My name is
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
                className={`font-bold tracking-wider lg:text-6xl md:text-4xl text-3xl dark:text-white text-[#0B0B13]`}>
                Khaing Wut Yi Win
              </div>
              {/* left text design body */}
              <div className=" ">
                <div
                  className={` flex-col flex w-[90%] relative primary-text font-semibold overflow-hidden  `}>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    ref={animateRef}
                    className=" flex flex-col justify-center ">
                    <span className={`text-3xl py-2 span`}>
                      Junior Website Developer
                    </span>
                    <span className={`text-3xl  py-2 span`}>
                      FrontEnd Web Developer
                    </span>
                    <span className={`text-3xl  py-2 span`}>
                      Junior React Developer
                    </span>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
                className={`text-[#0B0B13] dark:text-[#b9b9b9]  pb-4 lg:pb-0 md:pb-0`}>
                I develop the front-end projects, using react framework ,
                <br /> CSS library like bootstrap,tailwindCSS, mantine, Chakra
                UI, specialize in front-end language HTML, CSS,JS, SASS.
              </div>
              {/* btn */}
              <div>
                {/* <button
                  className={`px-6 py-3 rounded hover:-translate-y-2
            
              border-[1.5px] border-black hover:bg-white
              dark:border-white dark:hover:border-black
               dark:hover:bg-[#0B0B13] hover:text-[#0B0B13]
                dark:hover:text-white bg-[#0B0B13]
               text-white dark:text-black dark:bg-white dark:text-[##0B0B13] transition-C`}>
                  DOWNLOAD CV
                </button> */}
                <button
                  className="go-up py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded"
                  onClick={handleDownload}>
                  DOWNLOAD CV
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className={`md:hidden w-[40%] items-center justify-center lg:flex  hidden`}>
            <div className="leftImg mx-auto w-[50%] h-[400px] flex justify-center items-center flex-col">
              <img
                data-aos="fade-up"
                data-aos-duration="1200"
                src={landingImg}
                className=" object-cover  w-[85%] h-[85%] z-20 block rounded shadow-lg"
                alt=""
              />
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                className=" flex gap-2 items-center mt-3">
                <a
                  href="https://github.com/hoshikwyw"
                  className=" bg-[#0b0b13] dark:border-blue-100 dark:border-2 w-8 h-8 flex justify-center items-center text-lg text-white hover:text-red-600 p-1 rounded-full hover:bg-white">
                  <BiLogoGithub />
                </a>
                <a
                  href="#"
                  className=" bg-[#0b0b13] dark:border-blue-100 dark:border-2 w-8 h-8 flex justify-center items-center text-lg text-white hover:text-red-600 p-1 rounded-full hover:bg-white">
                  <BiLogoTwitter />
                </a>

                <a
                  href="#"
                  className=" bg-[#0b0b13] dark:border-blue-100 dark:border-2 w-8 h-8 flex justify-center items-center text-lg text-white hover:text-red-600 p-1 rounded-full group">
                  <BiLogoInstagram className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
