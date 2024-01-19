import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { closeMenu, onMenuOverlay } from '../store/slices/GeneralConfigSlice';
import Card from '../components/Card';
import SearchResultCard from '../components/SearchResultCard';
import CardForVideoPage from '../components/CardForVideoPage';
import { IoPersonCircle } from 'react-icons/io5';
import { MdOutlineThumbUp } from 'react-icons/md';
import { MdOutlineThumbDownOffAlt } from 'react-icons/md';
import useViewFormater from '../CustomHooks/useViewFormater';
import { IoMdShareAlt } from 'react-icons/io';
import CommentsSection from '../components/CommentSection';
import { addSuggestedVideos, addVideos } from '../store/slices/DataSlice';
import { YT_KEY, YT_URL, comments, options } from '../assets/Constants';

let data = [
  {
    user: 'akash',
    text: 'hello',
    reply: [
      {
        user: 'akash',
        text: 'hello',
        reply: [],
      },
    ],
  },
  {
    user: 'akash',
    text: 'hello',
    reply: [],
  },
  {
    user: 'akash',
    text: 'hello',
    reply: [],
  },
];

const VideoPage = () => {
  const { v } = useParams();
  let mainVideoURL = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${v}`;
  let suggestedVideosURL = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${v}&part=id%2Csnippet%2Cstatistics&type=video&maxResults=50`;
  const dispatch = useDispatch();
  const videos = useSelector((store) => store?.data?.videos);
  const suggestedVideos = useSelector((store) => store?.data?.suggestedVideos);
  const [mainVideoDetail, setMainVideoDetail] = useState([]);

  useEffect(() => {
    getMainVideos();
    getSuggestedVideos();
    setMainVideoDetail(videos.filter((video) => video.id == v));
  }, [v]);

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(onMenuOverlay());
  }, []);

  async function getMainVideos() {
    try {
      let data = await fetch(mainVideoURL, options);
      let jsonData = await data.json();

      setMainVideoDetail(jsonData.items);
      dispatch(addVideos(jsonData.items));
    } catch (error) {
      console.error('Error fetching main video:', error);
    }
  }

  async function getSuggestedVideos() {
    try {
      let data = await fetch(suggestedVideosURL, options);
      let jsonData = await data.json();
      console.log('suggest', jsonData);

      dispatch(addSuggestedVideos(jsonData.items));
    } catch (error) {
      console.error('Error fetching suggested videos:', error);
    }
  }

  return (
    <>
      <div className='w-screen min-h-screen flex items-start flex-col lg:flex-row justify-center gap-5 lg:gap-10 '>
        <div className='w-full p-5 mx-auto lg:w-[50%] lg:h-[400px]'>
          <iframe
            className='w-full h-72 lg:w-full lg:h-full'
            src={'https://www.youtube.com/embed/' + v}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
          <div className=''>
            <p className='my-4 text-[12px] lg:text-xl'>{mainVideoDetail[0]?.snippet?.title}</p>
            <div className='flex flex-row gap-5 justify-between '>

              <div className='flex justify-center items-center gap-8 '>
                <div className='flex justify-center items-center'>
                  <span>
                    <IoPersonCircle className='h-8 w-8 lg:h-14 lg:w-14' />
                  </span>
                  <span className='text-[10px] flex lg:text-xl ml-2'>{mainVideoDetail[0]?.snippet?.channelTitle}</span>
                </div>
                <button className='h-fit text-[10px]  py-2 px-5 text-black rounded-full bg-white hover:bg-[#ddd]'>Subscribe</button>
              </div>
              <div className='hidden h-fit w-fit lg:flex gap-5'>
                <div className='w- bg-[rgba(0,0,0,0.6)] py-2 rounded-full flex justify-center items-center'>
                  <button className='w-fit rounded-l-full px-4  border-r border-gray-100 flex'>
                    <MdOutlineThumbUp className='text-xl' />
                    <span className='text-[12px] lg:text-xl'>{useViewFormater(mainVideoDetail[0]?.statistics.viewCount)}</span>
                  </button>
                  <button className=' w-fit rounded-r-full px-4 '>
                    <MdOutlineThumbDownOffAlt className='text-xl' />
                  </button>
                </div>

                <button className='bg-[rgba(0,0,0,0.6)] rounded-full py-2 px-4'>
                  <IoMdShareAlt className='text-2xl' />
                </button>
              </div>
            </div>
            <div className='flex justify-start gap-5 mt-3 lg:hidden'>
            <div className='w-fit bg-[rgba(0,0,0,0.6)] py-2 rounded-full flex justify-center items-center'>
                  <button className='w-fit rounded-l-full px-4  border-r border-gray-100 flex'>
                    <MdOutlineThumbUp className='text-xl' />
                    <span className='text-[12px] lg:text-xl'>{useViewFormater(mainVideoDetail[0]?.statistics.viewCount)}</span>
                  </button>
                  <button className=' w-fit rounded-r-full px-4 '>
                    <MdOutlineThumbDownOffAlt className='text-xl' />
                  </button>
                 
                </div>
                <button className='bg-[rgba(0,0,0,0.6)] rounded-full py-2 px-4'>
                  <IoMdShareAlt className='text-2xl' />
                </button>
            </div>
          </div>
          <div className='w-full mt-5 '>
            <h3 className='text-2xl font-bold'>Comments : {useViewFormater(mainVideoDetail[0]?.statistics?.commentCount)}</h3>
            {comments?.map((com, i) => {
              return <CommentsSection key={i} user={com.user} text={com.text} />;
            })}
          </div>
        </div>
        <div className='w-full lg:w-[35%]'>
          <h4 className='text-2xl text-white font-bold'>Suggested Videos</h4>
          {suggestedVideos?.map((item, i) => {
            return <CardForVideoPage key={i} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default VideoPage;
