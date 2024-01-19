import React from 'react';
import { IoPersonCircle } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useViewFormater from '../CustomHooks/useViewFormater';
import { BsThreeDotsVertical } from 'react-icons/bs';
const SearchResultCard = ({data}) => {
    const navigate=useNavigate()
    // console.log(data)
    const {snippet,id}=data;
    const {title,thumbnails,channelTitle,description,channelId}=snippet;
    const isSideBarOpen = useSelector((store) => store.generalConfig.hamBurger);
  return (
    <>
    {
        data?.id?.kind=="youtube#channel" ?<div className={`${isSideBarOpen ? 'overflow-auto col-span-7 lg:col-span-9' : 'overflow-visible col-span-full'} z-10 bg-[#0f0f0f]  p-3 flex border-b border-gray-200 justify-between items-center  gap-5`}>
       <Link to={"../channel/"+channelId}>
        <img
        // onClick={()=>navigate("../channel/"+channelId)}
          src={thumbnails.medium.url?thumbnails.medium.url:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"} // Replace with your channel image source
          alt="Channel Thumbnail"
          className="w-96  lg:w-24 lg:h-24 object-cover border border-gray-200 rounded-full mr-4"
        />
        </Link>
        <div className='p-10 flex flex-col items-start'>
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-gray-500 text-sm">
            {description}
          </p>
        
        </div>
        <button className='py-2 p-5 text-black bg-white font-medium rounded-full hover:bg-[#ddd] hidden lg:visible' >Subscribe</button>
      </div>:
    //    <Link to={"../watch/"+id.videoId}>
    //    <div className="w-auto h-40 overflow-hidden lg:h-60 flex  relative text-white p-4 mb-4 rounded-lg">
    //   <img
    //     src={thumbnails.medium.url} // Replace with your image source
    //     alt="Video Thumbnail"
    //     className={`w-48 h-28 lg:w-auto lg:h-full object-cover rounded-md mr-4`}
    //   />
    //   <div className='flex flex-wrap lg:w-3/6'>
    //     <h2 className="visible lg:hidden text-[10px] font-semibold mb-2">{title.slice(0,30)}...</h2>
    //     <h2 className="hidden lg:block  lg:text-lg lg:font-semibold lg:mb-2">{title}</h2>
    //     <p className="text-gray-400 text-sm">
    //       {description.slice(0,50)}...
    //     </p>
    //   </div>
    // </div>
    // </Link>
    <div className='block w-[90%] h-fit my-2  md:w-80 lg:w-full  relative lg:flex gap-5'>
    <Link to={"../watch/"+id.videoId}>
    <img className="w-full rounded-lg object-cover" src={thumbnails?.medium?.url} alt="" /></Link>
   <div className='flex justify-between items-start '>
    <ul className='pt-2 w-[85%]'>
        <li className='text-[16px] font-semibold'>{title?.slice(0,80)}...</li>
        
        <li className='hidden lg:block text-[14px]  mt-1 text-gray-400'>{description.slice(0,100)}...</li>

    </ul>

<span className='pt-3'><BsThreeDotsVertical  className='text-xl'  /></span>
</div>
</div>

    }
   </>
  );
};

export default SearchResultCard;
