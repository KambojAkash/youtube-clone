import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import useGetVideoList from '../CustomHooks/useGetVideoList';
import { addVideos, clearVideos } from '../store/slices/DataSlice';
import { YT_KEY, YT_URL, options } from '../assets/Constants';
import { closeMenu, offMenuOverlay, onMenuOverlay, openMenu } from '../store/slices/GeneralConfigSlice';
import CardShimmer from './shimmers/CardShimmer';

const VideoContainer = () => {
    const [loading,setLoading]=useState(true)
    const dispatch = useDispatch();
  const isSideBarOpen = useSelector((store) => store.generalConfig.hamBurger);
  const OnMenuOverlay = useSelector((store) => store.generalConfig.sideBarOverlay);
  const videosData = useSelector((store) => store?.data?.videos);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  console.log(videosData,",.")
  const[data,setData]=useState([])
//   const [carddata, setCardData] = useState([]);
//   const data=useGetVideoList();
//   console.log(data)
useEffect(()=>{
    dispatch(offMenuOverlay())
  
   
},[])
useEffect(() => {
  dispatch(clearVideos())

  getVideos()

  // Function to update the isSmallDevice state based on the screen width
  const updateIsSmallDevice = () => {
    const screenWidth = window.innerWidth;
    setIsSmallDevice(screenWidth < 600);
  };

  // Initial check on component mount
  updateIsSmallDevice();

  
  window.addEventListener('resize', updateIsSmallDevice);

  
  return () => {
    window.removeEventListener('resize', updateIsSmallDevice);
  };
}, []);
useEffect(()=>{
 if(isSmallDevice){
  
  dispatch(closeMenu())
 }else{
  dispatch(openMenu())
  
 }
},[isSmallDevice])


async function getVideos(){
  try{
    let data = await fetch(YT_URL+YT_KEY);
    let jsonData = await data.json();
    console.log(jsonData,";;;;;;;;;;");
    
    setData(jsonData?.items)
    dispatch(addVideos(jsonData.items));
    setLoading(false)
  }catch{
    setLoading(false)
  }
 
    
}
  

   // Update the state when videoData changes
if(loading){
  return <CardShimmer />
}
  return (
    <>
   
    <div className={`${isSideBarOpen ? 'overflow-auto col-span-7 lg:col-span-9' : 'overflow-visible col-span-full'} z-10 bg-[#0f0f0f] min-h-screen p-3 flex justify-center items-center gap-3 flex-wrap lg:gap-5 `}>
      {videosData &&
        videosData?.map((item, i) => {
            // <p>{item.id}</p>
          return <Card key={i} data={item} />;
        })}
    </div>
    </>
  );
};

export default VideoContainer;
