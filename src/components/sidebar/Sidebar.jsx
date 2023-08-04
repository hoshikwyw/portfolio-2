import React,{useState} from 'react'
import {FaHome} from "react-icons/fa"
import {BsPerson} from "react-icons/bs"
import {AiOutlineFileText} from "react-icons/ai"
import {MdOutlineWorkOutline} from "react-icons/md"
import {FiPhoneOutgoing} from "react-icons/fi"
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import "../footer/footer.css"
import { useEffect } from 'react'
import "./sidebar.css"
import { useDispatch, useSelector } from 'react-redux'
import { setActive } from '../../../redux/sidebarSlice'
import { NavHashLink as Link } from 'react-router-hash-link'

const Sidebar = () => {
  // sidebar active class 
  const dispatch = useDispatch();
  const active = useSelector(state => state.sidebarSlice.value)
  // console.log(active);

  // back to top show 
  const [showBackToTop,setShowBackToTop] = useState(false);

  // mantine burger 
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  // back to top
  const backToTop = ()=>{
    document.documentElement.scrollTop = 0;
  }

  // back to top show 
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 500){
        setShowBackToTop(true);
      }else{
        setShowBackToTop(false);
      }
    })
  },[])

  return (
    <div>
      {/* sidebar  */}
        <div className={`z-50 h-screen fixed flex flex-col bg-white dark:bg-[#0c0c14] 
             ${opened ? "max-md:left-0 max-md:duration-500" :
              "max-md:left-[-300px] duration-200"}`}>
            <div className=' primary-bg text-white text-4xl max-[400px]:text-3xl font-bold flex justify-center pt-5
            max-[400px]:pt-4 h-[90px] max-[400px]:h-[80px]'>
                <h1>K</h1>
            </div>

            <div className=' border-r dark:border-[#25252C] h-screen text-gray-600 dark:text-white text-3xl max-[400px]:text-2xl flex flex-col justify-center item-center'>
                <Link to={"#0"}>
                  <div 
                    onClick={() => dispatch(setActive(0))} 
                    className={`${active == 0 ? "primary-text" : ""} transition-all duration-100 border-b dark:border-[#25252C] p-6 cursor-pointer relative nav`}>
                    <FaHome/>
                    <div className={`show-name hidden ${active == 0 ? "text-blue-400" : "text-white "} bg-[#494949] dark:bg-[#292930] text-sm px-2 py-1 absolute right-[-35px] top-[28px] rounded`}>Home
                    </div>
                  </div>
                </Link>

                <Link to={"#1"}>
                  <div 
                    onClick={() => dispatch(setActive(1))} 
                    className={`${active == 1 ? "primary-text" : ""} transition-all duration-100 border-b dark:border-[#25252C] p-6 cursor-pointer relative nav`}>
                    <BsPerson/>
                    <div className={`show-name hidden ${active == 1 ? "text-blue-400" : "text-white "} bg-[#494949] dark:bg-[#292930] text-sm px-2 py-1 absolute right-[-35px] top-[28px] rounded`}>About
                    </div>
                  </div>
                </Link>

                <Link to={"#2"}>
                  <div 
                    onClick={() => dispatch(setActive(2))} 
                    className={`${active == 2 ? "primary-text" : ""} transition-all duration-100 border-b dark:border-[#25252C] p-6 cursor-pointer relative nav`}>
                    <AiOutlineFileText/>
                    <div className={`show-name hidden ${active == 2 ? "text-blue-400" : "text-white "} bg-[#494949] dark:bg-[#292930] text-sm px-2 py-1 absolute right-[-44px] top-[28px] rounded`}>resume
                    </div>
                  </div>
                </Link>

                <Link to={"#3"}>
                  <div 
                    onClick={() => dispatch(setActive(3))} 
                    className={`${active == 3 ? "primary-text" : ""} transition-all duration-100 border-b dark:border-[#25252C] p-6 cursor-pointer relative nav`}>
                    <MdOutlineWorkOutline/>
                    <div className={`show-name hidden ${active == 3 ? "text-blue-400" : "text-white "} bg-[#494949] dark:bg-[#292930] text-sm px-2 py-1 absolute right-[-44px] top-[28px] rounded`}>project
                    </div>
                  </div>
                </Link>

                <Link to={"#4"}>
                  <div 
                    onClick={() => dispatch(setActive(4))} 
                    className={`${active == 4 ? "primary-text" : ""} transition-all duration-100 p-6 cursor-pointer relative nav`}>
                    <FiPhoneOutgoing/>
                    <div className={`show-name hidden ${active == 4 ? "text-blue-400" : "text-white "} bg-[#494949] dark:bg-[#292930] text-sm px-2 py-1 absolute right-[-50px] top-[25px] rounded`}>contact
                    </div>
                  </div>
                </Link>
            </div>
        </div>

      {/* menu burger */}
      <div className='z-50 fixed right-5 bottom-6 hidden max-md:block'>
        <div className=' cursor-pointer primary-bg w-[60px] h-[60px] text-center pt-3 rounded-full'>
        <Burger opened={opened} onClick={toggle} aria-label={label} color="#fff" />
        </div>
      </div>

      {/* back to top  */}
      <div className={`${showBackToTop ? "block" : "hidden"}`}>
        {/* <div  className="fixed right-5 bottom-6 z-50 max-md:hidden z-5 cursor-pointer shadow-light">
          <div className=" p-2 text-xl hover:bg-gray-900 dark:hover:bg-[#DBD9D9] duration-500 bg-black text-white dark:bg-white dark:text-black rounded dark:shadow">
          <AiOutlineArrowUp/>
          </div>
        </div> */}

        <div onClick={backToTop} className='z-50 fixed right-5 bottom-6 max-md:hidden'>
        <div className=' cursor-pointer primary-bg w-[50px] h-[50px] flex justify-center item-center pt-2 rounded-full'>
        <MdOutlineKeyboardArrowUp className="text-3xl text-white font-bold"/>
        </div>
        </div>
      </div>


    </div>
  )
}

export default Sidebar