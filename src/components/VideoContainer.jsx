import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import useGetVideoList from '../CustomHooks/useGetVideoList';
import { addVideos } from '../store/slices/DataSlice';
import { YT_KEY, YT_URL } from '../assets/Constants';

const VideoContainer = () => {
    const dispatch = useDispatch();
  const isSideBarOpen = useSelector((store) => store.generalConfig.hamBurger);
  const videosData = useSelector((store) => store?.data?.videos);
//   const [carddata, setCardData] = useState([]);
  const data =useGetVideoList();
//   console.log(data)

  !videosData && dispatch(addVideos(data));
  

   // Update the state when videoData changes

  return (
    <div className={`${isSideBarOpen ? 'overflow-auto col-span-7 lg:col-span-9' : 'overflow-visible col-span-full'} z-10 bg-[#0f0f0f] min-h-screen p-3 flex justify-center items-center flex-wrap gap-5`}>
      {data &&
        data.map((item, i) => {
            // <p>{item.id}</p>
          return <Card key={i} data={item} />;
        })}
    </div>
  );
};

export default VideoContainer;
