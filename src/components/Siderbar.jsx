import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
import { onMenuOverlay } from '../store/slices/GeneralConfigSlice';
const Siderbar = () => {
    const menuOverlay=useSelector((store) => store.generalConfig.sideBarOverlay);
    console.log(onMenuOverlay)
  return (
    <>
    <div className={`col-span-4 lg:col-span-2 bg-[#0f0f0f] text-white px-2 ${menuOverlay==true?"absolute min-h-screen top-14 left-0":"relative"}`}>
        <ul className='list-none w-full flex flex-col justify-center items-center'>
            <li className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><SiYoutubeshorts className='text-3xl text-white' /> <span>Home</span></li>
            <li className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><IoMdHome className='text-3xl text-white' /> <span>Shorts</span></li>
            <li className='w-full p-3 hover:bg-gray-600 transition-all duration-150 rounded-lg cursor-pointer flex gap-5 '><MdSubscriptions className='text-3xl text-white'/> <span>Subscription</span></li>
           
        </ul>
    </div>
    </>
  )
}

export default Siderbar