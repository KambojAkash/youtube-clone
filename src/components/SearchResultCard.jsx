import React from 'react';
import { IoPersonCircle } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
const SearchResultCard = ({data}) => {
    const navigate=useNavigate()
    console.log(data)
    const {snippet,id}=data;
    const {title,thumbnails,channelTitle,description,channelId}=snippet;
   
  return (
    <>
    {
        data?.id?.kind=="youtube#channel" ?<div className="w-[1000px] p-5 h-60 items-center border-t border-b border-gray-300 flex justify-between yp-4 mb-4  shadow-md">
       <Link to={"../channel/"+channelId}>
        <img
        // onClick={()=>navigate("../channel/"+channelId)}
          src={thumbnails.medium.url?thumbnails.medium.url:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"} // Replace with your channel image source
          alt="Channel Thumbnail"
          className="w-24 h-24 object-cover border border-gray-200 rounded-full mr-4"
        />
        </Link>
        <div className='p-10'>
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-gray-500 text-sm">
            {description}
          </p>
        
        </div>
        <button className='py-2 p-5 text-black bg-white font-medium rounded-full hover:bg-[#ddd]' >Subscribe</button>
      </div>:
       <Link to={"../watch/"+id.videoId}>
       <div className="w-full h-60 flex relative text-white p-4 mb-4 rounded-lg">
      <img
        src={thumbnails.medium.url} // Replace with your image source
        alt="Video Thumbnail"
        className={`h-full object-cover rounded-md mr-4`}
      />
      <div className='flex flex-wrap flex-col'>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </div>
    </Link>
    }
   </>
  );
};

export default SearchResultCard;
