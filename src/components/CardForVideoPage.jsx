import React from 'react';
import { IoPersonCircle } from "react-icons/io5";
import useViewFormater from '../CustomHooks/useViewFormater';
import { Link } from 'react-router-dom';
const CardForVideoPage = ({data}) => {
    // console.log(data)
    const {snippet,id}=data;
    const {title,thumbnails,channelTitle,description,publishedAt}=snippet;
    // const{viewCount}=statistics
    function calculateTimeDifference(publishedTime) {
        const now = new Date();
        const publishedDate = new Date(publishedTime);
      
        const timeDifferenceInSeconds = Math.floor((now - publishedDate) / 1000);
      
        if (timeDifferenceInSeconds < 60) {
          return `${timeDifferenceInSeconds} seconds ago`;
        } else if (timeDifferenceInSeconds < 3600) {
          const minutes = Math.floor(timeDifferenceInSeconds / 60);
          return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else if (timeDifferenceInSeconds < 86400) {
          const hours = Math.floor(timeDifferenceInSeconds / 3600);
          return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else {
          const days = Math.floor(timeDifferenceInSeconds / 86400);
          return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        }
      }
  return (
    <>
    {
        data?.id?.kind=="youtube#channel" ?<div className="w-[1000px] p-5 h-60 items-center border-t border-b border-gray-300 flex justify-between yp-4 mb-4  shadow-md">
        <img
          src={thumbnails?.medium?.url ? thumbnails?.medium?.url:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"} // Replace with your channel image source
          alt="Channel Thumbnail"
          className="w-24 h-24 object-cover border border-gray-200 rounded-full mr-4"
        />
        <div className='p-10'>
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-gray-500 text-sm">
            {description}
          </p>
        
        </div>
        <button className='py-2 p-5 text-black bg-white font-medium rounded-full hover:bg-[#ddd]' >Subscribe</button>
      </div>: 
      <Link to={"/watch/"+id.videoId}>
      <div className="w-full h-32 flex relative text-white p-2  rounded-lg">
      <img
        src={thumbnails?.medium?.url?thumbnails?.medium?.url:"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg"} // Replace with your image source
        alt="Video Thumbnail"
        className={`w-[50%]  object-cover rounded-md mr-4`}
      />
      <div className='flex flex-wrap flex-col '>
        <h2 className="text-[14px] font-semibold mb-2">{title.slice(0,60)}...</h2>
        <span className='text-[13px] text-gray-200 block'>{channelTitle}</span>
        {/* <span className='text-[13px] text-gray-200 inline'>{useViewFormater(viewCount)} . {calculateTimeDifference(publishedAt)}</span> */}
    
      </div>
    </div>
    </Link>
    }
   </>
  );
};

export default CardForVideoPage;
