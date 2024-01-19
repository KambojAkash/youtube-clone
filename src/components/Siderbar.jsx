import React, { useCallback, useEffect, useState } from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { offMenuOverlay, onMenuOverlay } from '../store/slices/GeneralConfigSlice';
import { MdOutlineExplore } from "react-icons/md";
import { GiLoveSong } from "react-icons/gi";
import { MdMovieCreation } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Siderbar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const menuOverlay=useSelector((store) => store.generalConfig.sideBarOverlay);
  
    console.log(onMenuOverlay)

  
    

  return (
    <>
    <div className={`col-span-4 lg:col-span-2 bg-black text-white px-2 ${(menuOverlay==true)?"absolute min-h-screen top-14 left-0":"relative"} `}>
        <ul className='list-none w-full flex flex-col justify-center items-center'>
            <li onClick={()=>(navigate("/"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><SiYoutubeshorts className='text-3xl text-white' /> <span>Home</span></li>
            <li onClick={()=>(navigate("/search/shorts video"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><IoMdHome className='text-3xl text-white' /> <span>Shorts</span></li>
            {/* <li className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><MdOutlineExplore className='text-3xl text-white'/> <span>Explore</span></li> */}
           
            <li  className='w-full p-3 rounded-lg  flex gap-5 '> <span>Explore</span></li>
            <li onClick={()=>(navigate("/search/movies"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><MdMovieCreation className='text-3xl text-white'/> <span>Movies</span></li>
             
            <li onClick={()=>(navigate("/search/coding"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><FaCode className='text-3xl text-white'/> <span>Coding</span></li>
            <li onClick={()=>(navigate("/search/songs"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><GiLoveSong className='text-3xl text-white'/> <span>Songs</span></li>
            <li onClick={()=>(navigate("/search/sports"))} className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><MdOutlineSportsCricket className='text-3xl text-white'/> <span>Sports</span></li>
            
            
           
        </ul>
    </div>
    </>
  )
}

export default Siderbar