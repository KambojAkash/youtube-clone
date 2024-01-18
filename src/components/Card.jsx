import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import useViewFormater from '../CustomHooks/useViewFormater';
import { Link } from 'react-router-dom';
const Card = ({data}) => {
    // console.log("card",data)
    const {snippet,statistics,id}=data;
    const {title,thumbnails,channelTitle}=snippet;
    const{viewCount}=statistics;
  
   
      
      
      
  return (
    <>
    <div className='w-80 h-72 relative'>
        <Link to={"/watch/"+id}>
        <img className="w-full rounded-lg object-cover" src={thumbnails?.medium?.url} alt="" /></Link>
       <div className='flex justify-between items-start '>
        <ul className='pt-2 w-[85%]'>
            <li className='text-[16px] font-semibold'>{title.slice(0,80)}...</li>
            <li className='text-[14px]  mt-1 text-gray-400'>{channelTitle} . {useViewFormater(viewCount)}</li>

        </ul>

   <span className='pt-3'><BsThreeDotsVertical className='text-xl'  /></span>
   </div>
    </div>

    </>

  )
}

export default Card