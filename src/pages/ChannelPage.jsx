import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { YT_CHANNEL, YT_KEY, options } from '../assets/Constants';
import { addChannelVideos, clearChannelVideos } from '../store/slices/DataSlice';
import useViewFormater from '../CustomHooks/useViewFormater';

const ChannelPage = () => {
    
    const{c}=useParams();
    const dispatch=useDispatch()
    const [channelDetail,setChannelDetail]=useState([]);
    const channelVideos=useSelector((store)=>store?.data?.channelVideos)
    
    const isSideBarOpen = useSelector((store) => store.generalConfig.hamBurger);
    useEffect(()=>{
      getChannelDetails();
      dispatch(clearChannelVideos())
      channelVideos.length==0 && getVideos()
    },[])
  
    async function getVideos(){
        let data=await fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${c}&part=snippet%2Cid&order=date&maxResults=50`,options);
        let jsonData=await data.json();
        dispatch(addChannelVideos(jsonData.items))
       
    }
    async function getChannelDetails(){
        let data=await fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${c}`,options);
        let jsonData=await data.json();
        setChannelDetail(jsonData.items[0])
       
    }
  return (
    <div className={`${isSideBarOpen ? 'overflow-auto col-span-7 lg:col-span-9' : 'overflow-visible col-span-full'} z-10 bg-[#0f0f0f] min-h-screen p-3 `}>
    
      <div className="mb-4">
        <div className="flex items-center">
          <img
            className="w-20 h-20 rounded-full mr-4"
            src={channelDetail?.snippet?.thumbnails?.high?.url}
            alt="Channel Logo"
          />
          <div>
            <h1 className="text-2xl font-semibold">{channelDetail?.snippet?.title}</h1>
            <h1 className="text-xl ">Videos : {useViewFormater(channelDetail?.statistics?.videoCount)}</h1>
            <p className="text-gray-500">Subscribers : {useViewFormater(channelDetail?.statistics?.subscriberCount)}</p>
          </div>
        </div>
      </div>

      {/* Channel Videos */}
     
      <div className='w-full flex gap-5 flex-wrap p-5'>
        {channelVideos.map((video, index) => (
             <Link to={"../watch/"+video.id.videoId}>
          <div key={index} className="w-80 rounded-lg overflow-hidden">
            <img
              className="w-full h-48 rounded-lg object-cover"
              src={video.snippet.thumbnails.medium.url}
              alt={`Video Thumbnail ${index + 1}`}
            />
            <div className="p-4">
              <h2 className="text-white text-lg font-semibold mb-2">
               {video?.snippet?.title}
              </h2>
              <p className="text-gray-400 text-sm">{video?.snippet?.channelTitle}</p>
            </div>
          </div>
           </Link>
        ))}
      </div>
     
    </div>
  );
};

export default ChannelPage;
