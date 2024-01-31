import React, { useCallback, useEffect, useState } from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { offMenuOverlay, onMenuOverlay, setLang } from '../store/slices/GeneralConfigSlice';
import { MdOutlineExplore } from "react-icons/md";
import { GiLoveSong } from "react-icons/gi";
import { MdMovieCreation } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { languageParts } from '../lang/lang';
import { IoLanguage } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Siderbar = () => {
  const navigate=useNavigate();

  const dispatch=useDispatch()
    const menuOverlay=useSelector((store) => store.generalConfig.sideBarOverlay);
    const language=useSelector((store) => store.generalConfig.lang);
  
    // console.log(onMenuOverlay)

  
    

  return (
    <>
    <div className={`col-span-4 lg:col-span-2 bg-[#0f0f0f] text-white px-2 ${(menuOverlay==true)?"absolute min-h-screen top-14 left-0":"relative"} `}>
        <ul className='list-none w-full flex flex-col justify-center items-center'>
            <li onClick={()=>(navigate("/"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><IoMdHome className='text-3xl text-white' /> <span>{languageParts.home[language]}</span></li>
            <li onClick={()=>(navigate("/search/shorts video"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><SiYoutubeshorts className='text-3xl text-white' /> <span>{languageParts.shorts[language]}</span></li>
            {/* <li className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><MdOutlineExplore className='text-3xl text-white'/> <span>Explore</span></li> */}
           
            <li  className='w-full p-3 rounded-lg  flex gap-5 '> <span>Explore</span></li>
            <li onClick={()=>(navigate("/search/movies"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><MdMovieCreation className='text-3xl text-white'/> <span>{languageParts.movies[language]}</span></li>
             
            <li onClick={()=>(navigate("/search/coding"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><FaCode className='text-3xl text-white'/> <span>{languageParts.coding[language]}</span></li>
            <li onClick={()=>(navigate("/search/songs"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><GiLoveSong className='text-3xl text-white'/> <span>{languageParts.songs[language]}</span></li>
            <li onClick={()=>(navigate("/search/sports"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><MdOutlineSportsCricket className='text-3xl text-white'/> <span>{languageParts.sports[language]}</span></li>
            <li  className='w-full p-3 rounded-lg  flex gap-5 '> <span>Settings</span></li>
            <li className='w-full p-3  flex gap-5 '><IoLanguage className='text-3xl text-white'/> 
            <select className='bg-transparent' value={language} onChange={(e)=>{dispatch(setLang(e.target.value))}}>
              <option  className='bg-transparent text-black' value="english" >English</option>
              <option className='bg-transparent text-black' value="hindi">Hindi</option>
              <option className='bg-transparent text-black' value="spanish">Spanish</option>
              <option className='bg-transparent text-black' value="french">French</option>
            </select>

            </li>
            
            
           
        </ul>
    </div>
    </>
  )
}

export default Siderbar