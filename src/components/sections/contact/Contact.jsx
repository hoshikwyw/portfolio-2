import React from "react";
import "./contact.css";
import { TbMap2 } from "react-icons/tb";
import { BsEnvelopePaper } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  const handleEmailClick = () => {
    const recipientEmail = "khaingwutyiwin1712@gmail.com";
    const subject = "Your subject here";
    const body = "Your message here";

    const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipientEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailComposeLink);
  };
  const handlePhoneClick = () => {
    const phoneNumber = "+959798149037";
    const telLink = `tel:${phoneNumber}`;
    window.open(telLink, "_self");
  };
  return (
    <div className="bg-[#F7F7FF] dark:bg-[#0E0E17] duration-200 flex flex-col gap-16 justify-center w-[100%]">
      <div className="w-[90%] mx-auto mt-20 flex max-lg:flex-col max-lg:gap-12 gap-0 justify-between">
        {/* left info */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-[30%] max-lg:w-[100%] flex flex-col gap-3">
          <h1 className=" text-black dark:text-white text-4xl font-medium">
            What’s your story? Get in touch
          </h1>
          <p className=" text-gray-800 dark:text-gray-300 font-extralight">
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-start">
              <p>
                <TbMap2 className="primary-text mr-3 text-2xl" />
              </p>
              <p className="text-black dark:text-gray-300 text-lg font-medium">
                No.255 , ThameinBayan street , ShwePyiThar Township , Yangon ,
                Myanmar
              </p>
            </div>
            <div className="flex items-start">
              <p>
                <BsEnvelopePaper className="primary-text mr-4 text-xl" />
              </p>
              <a
                href="#"
                target="_blank"
                onClick={handleEmailClick}
                className="text-black dark:text-gray-300 text-lg font-medium break-words">
                khaingwutyiwin1712@domain.com
              </a>
            </div>
            <div className="flex items-start">
              <p>
                <GiSmartphone className="primary-text mr-[10px] text-3xl -ml-1" />
              </p>
              <a
              href="#"
              onClick={handlePhoneClick} className="text-black dark:text-gray-300 text-lg font-medium">
                +959798149037
              </a>
            </div>
          </div>
        </div>
        {/* right form  */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="flex flex-col gap-5 w-[55%] max-lg:w-[100%]">
          <h1 className=" text-black dark:text-white text-2xl font-medium">
            Say Something
          </h1>
          <form className="flex flex-col gap-4">
            <div className="flex max-md:flex-col max-md:gap-4 gap-6">
              <input
                type="text"
                placeholder="Full name"
                className="w-[50%] max-md:w-[100%] py-2 px-3 bg-white dark:bg-transparent outline-none border border-[#57575D] text-black dark:text-gray-300 placeholder:text-[#57575D] text-sm"
              />
              <input
                type="text"
                placeholder="Email address"
                className="w-[50%] max-md:w-[100%] py-2 px-3 bg-white dark:bg-transparent outline-none border border-[#57575D] text-black dark:text-gray-300 placeholder:text-[#57575D] text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Full name"
              className="w-[100%] py-2 px-3 bg-white dark:bg-transparent outline-none border border-[#57575D] text-black dark:text-gray-300 placeholder:text-[#57575D] text-sm"
            />
            <textarea
              className="w-[100%] py-2 px-3 bg-white dark:bg-transparent outline-none border border-[#57575D] text-black dark:text-gray-300 placeholder:text-[#57575D] text-sm"
              placeholder="Type comment"
              cols="30"
              rows="4"></textarea>
            <div>
              <button className="go-up py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-[90%] mx-auto mb-24 border-[5px] border-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3816.1262146072017!2d96.07119795157621!3d16.968340880897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1691165829227!5m2!1sen!2smm"
          width="100%"
          height="380"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
          
      </div>
    </div>
  );
};

export default Contact;
