import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import useGetVideoList from '../CustomHooks/useGetVideoList';
import { addVideos, clearVideos } from '../store/slices/DataSlice';
import { YT_KEY, YT_URL, options } from '../assets/Constants';
import { offMenuOverlay } from '../store/slices/GeneralConfigSlice';
import CardShimmer from './shimmers/CardShimmer';

const VideoContainer = () => {
    const [loading,setLoading]=useState(true)
    const dispatch = useDispatch();
  const isSideBarOpen = useSelector((store) => store.generalConfig.hamBurger);
  const videosData = useSelector((store) => store?.data?.videos);
 
  console.log(videosData,",.")
  const[data,setData]=useState([])
//   const [carddata, setCardData] = useState([]);
//   const data=useGetVideoList();
//   console.log(data)
useEffect(()=>{
    dispatch(offMenuOverlay())
   dispatch(clearVideos())

   getVideos()
   
},[])



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
