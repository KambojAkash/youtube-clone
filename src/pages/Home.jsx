import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Siderbar from "../components/Siderbar";
import VideoContainer from "../components/VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import useGetVideoList from "../CustomHooks/useGetVideoList";
import { addVideos } from "../store/slices/DataSlice";
import { Outlet } from "react-router-dom";
import SearchResultCard from "../components/SearchResultCard";
import { offMenuOverlay } from "../store/slices/GeneralConfigSlice";
const Home = () => {
  const dispatch=useDispatch()
  const isSideBarOpen = useSelector((store) => store.generalConfig.hamBurger);
  const OnMenuOverlay = useSelector((store) => store.generalConfig.sideBarOverlay);
  
  useEffect(()=>{
dispatch(offMenuOverlay())
  },[])
    
    
     
     

 
  

  return (
    <div className="w-screen relative transition-all duration-200 bg-[#0f0f0f] text-white">
      <Navbar />
      <div className="w-screen min-h-screen bg-[#0f0f0f] grid grid-cols-11">
        {isSideBarOpen && <Siderbar />}
        

        <Outlet />
       
      </div>
    </div>
  );
};

export default Home;
