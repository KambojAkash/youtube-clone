import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { YT_CHANNEL, YT_KEY, options } from '../assets/Constants';
import { addChannelVideos, clearChannelVideos } from '../store/slices/DataSlice';

const ChannelPage = () => {
    
    const{c}=useParams();
    const dispatch=useDispatch()
    const channelVideos=useSelector((store)=>store?.data?.channelVideos)
    console.log("{}",channelVideos)
    const isSideBarOpen = useSelector((store) => store.generalConfig.hamBurger);
    useEffect(()=>{
       dispatch(clearChannelVideos())
       channelVideos.length==0 && getVideos()
    },[c])
    async function getVideos(){
        let data=await fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${c}&part=snippet%2Cid&order=date&maxResults=50`,options);
        let jsonData=await data.json();
        dispatch(addChannelVideos(jsonData.items))
        console.log("channel videos ---------",jsonData)
    }
  return (
    <div className={`${isSideBarOpen ? 'overflow-auto col-span-7 lg:col-span-9' : 'overflow-visible col-span-full'} z-10 bg-[#0f0f0f] min-h-screen p-3 `}>
      {/* Channel Header */}
      <div className="mb-4">
        <div className="flex items-center">
          <img
            className="w-20 h-20 rounded-full mr-4"
            src="https://via.placeholder.com/100"
            alt="Channel Logo"
          />
          <div>
            <h1 className="text-2xl font-semibold">Channel Name</h1>
            <p className="text-gray-500">Subscribers: 1M</p>
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
